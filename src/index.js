/* global document, Image */

import range from './range';
import domNodesToArray from './domNodesToArray';

import {
  CANVAS_SIZE,
  FILL_STYLE,
  STROKE_STYLE,
  LETTER_SIZE,
  LETTER_SPACING,

  NUMBERS,
} from './constants';

class FaviconCount {
  constructor() {
    const favicon = this.getFavicon();

    if (!favicon) {
      return;
    }

    this.faviconImage = favicon.getAttribute('href');
    [this.head] = document.getElementsByTagName('head');
  }

  /**
   * The public method: create and set an icon with an optional count. If a non-
   * null count is passed, it will render the count on top of the favicon. If
   * a count is not passed, it will render a blank favicon.
   * @param {number} [count] - the number to draw on the icon
   */
  render(count) {
    if (count !== null && typeof count !== 'undefined') {
      this.drawCountOnCanvas(count, (icon) => {
        this.addIconToDom(icon.toDataURL('image/png'));
      });
    } else {
      this.getFaviconCanvas((canvas) => {
        this.addIconToDom(canvas.toDataURL('image/png'));
      });
    }
  }

  /**
   * A method to try to get the favicon from any site by looking for a <link />
   * tag with a rel="shortcut" attribute. Prefer size 32, otherwise sort by
   * largest to smallest
   * @return {DomElement} the found favicon, or null
   */
  getFavicon() {
    const icons = domNodesToArray(document.getElementsByTagName('link'))
      .filter((link) => link.getAttribute('rel').includes('icon'))
      .sort((a, b) => {
        const sizeA = a.getAttribute('sizes')
          ? parseInt(a.getAttribute('sizes').split('x')[0], 10)
          : 0;
        const sizeB = b.getAttribute('sizes')
          ? parseInt(b.getAttribute('sizes').split('x')[0], 10)
          : 0;

        if (sizeA === 32) {
          return -1;
        }

        if (sizeB === 32) {
          return 1;
        }

        return sizeB - sizeA;
      });

    return icons[0];
  }

  /**
   * Create a canvas element that has the favicon image as a background, and
   * store the generated canvas on the class to make subsequent calls faster.
   * @param {function} callback - a function to run with the resulting canvas
   */
  getFaviconCanvas(callback) {
    if (!this.faviconCanvas) {
      this.faviconCanvas = document.createElement('canvas');
      this.faviconCanvas.width = CANVAS_SIZE;
      this.faviconCanvas.height = CANVAS_SIZE;

      const ctx = this.faviconCanvas.getContext('2d');
      const img = new Image();

      // allow cross-origin access for the image (since fallbacks may be hosted
      // on domains other than the target domain)
      img.crossOrigin = 'anonymous';

      img.addEventListener('load', () => {
        ctx.drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
        callback(this.faviconCanvas);
      }, true);

      img.src = this.faviconImage;
    } else {
      callback(this.faviconCanvas);
    }
  }

  /**
   * The top-level drawing function. This converts a number to a set of
   * characters to render, retrieves a canvas, renders the characters, and
   * caches the result for future use.
   * @param {number} count - the number of items to render as a count
   * @param {Function} callback - a function to run with the resulting canvas
   */
  drawCountOnCanvas(count, callback) {
    // if greater than 99, set to '100+'
    const characters = count > 99 ? '99+' : count;

    // create a cache of canvases created, keyed by the characters rendered
    // (e.g., `1`, `'99+'`), if it does not yet exist
    if (!this.drawnCanvases) {
      this.drawnCanvases = {};
    }

    // if we have this characters cached, run the callback on the cache and short circuit
    if (this.drawnCanvases[characters]) {
      callback(this.drawnCanvases[characters]);
      return;
    }

    // how many digits the number of unread items is
    const numberOfDigits = String(characters).length;

    this.getFaviconCanvas((iconCanvas) => {
      const characterCanvas = document.createElement('canvas');
      characterCanvas.height = iconCanvas.width;
      characterCanvas.width = iconCanvas.width;
      const ctx = characterCanvas.getContext('2d');
      ctx.drawImage(iconCanvas, 0, 0);

      ctx.strokeStyle = STROKE_STYLE;
      ctx.fillStyle = FILL_STYLE;

      // we want the number to be in the lower-right corner, but canvas
      // takes coordinates from the upper-left. so, we calculate the
      // upper-left offset with the size of the numbers.
      const padding = iconCanvas.width * 0.0625; // canvas edge to the number, as a percentage
      const topMargin = iconCanvas.height - NUMBERS['0'].length - padding; // canvas height from icon top
      const numbersWidth = NUMBERS['0'][0].length * numberOfDigits + LETTER_SPACING * (numberOfDigits - 1);
      let leftMargin = iconCanvas.width - numbersWidth - 1;

      if (leftMargin < 0) {
        leftMargin = 0;
      }

      // stroke
      this.drawCharacters({
        characters,
        fn: (x, y) => {
          ctx.strokeRect(
            x + leftMargin - LETTER_SIZE,
            y + topMargin - LETTER_SIZE,
            LETTER_SIZE * 3,
            LETTER_SIZE * 3,
          );
        },
      });

      // fill
      this.drawCharacters({
        characters,
        fn: (x, y) => {
          ctx.fillRect(
            x + leftMargin,
            y + topMargin,
            LETTER_SIZE,
            LETTER_SIZE,
          );
        },
      });

      this.drawnCanvases[characters] = characterCanvas;

      callback(characterCanvas);
    });
  }

  /**
   * Draw a set of characters.
   * @param {Object} options - a dictionary of options
   * @param {number} options.characters - the characters to draw
   * @param {Function} options.fn - the drawing function (a method on the canvas)
   */
  drawCharacters({
    characters,
    fn,
  }) {
    let digit;
    let numberMap;
    let numberHeight;
    let numberWidth;
    let xOffset = 0;

    range(0, String(characters).length).forEach((_, i) => {
      digit = String(characters)[i];

      if (NUMBERS[digit]) {
        numberMap = NUMBERS[digit];
        numberHeight = numberMap.length;
        numberWidth = numberMap[0].length;
        xOffset = numberWidth * i + LETTER_SPACING * i;

        range(0, numberHeight).forEach((y) => {
          range(0, numberWidth).forEach((x) => {
            if (numberMap[y][x]) {
              fn(x + xOffset, y);
            }
          });
        });
      }
    });
  }

  /**
   * Add an icon to the dom and make sure it renders.
   * @param {string} iconHref - the href for the icon
   */
  addIconToDom(iconHref) {
    const links = this.head.getElementsByTagName('link');

    // remove the old icon
    [].slice.call(links).forEach((link) => {
      if (link.rel === 'shortcut icon' || link.rel === 'icon') {
        this.head.removeChild(link);
      }
    });

    // add the new icon to the head
    const newIcon = document.createElement('link');
    newIcon.type = 'image/png';
    newIcon.rel = 'shortcut icon';
    newIcon.href = iconHref;
    this.head.appendChild(newIcon);

    // chrome hack for updating the favicon
    const shim = document.createElement('iframe');
    shim.width = 0;
    shim.height = 0;
    document.body.appendChild(shim);
    shim.src = 'icon';
    document.body.removeChild(shim);
  }
}

export default FaviconCount;
