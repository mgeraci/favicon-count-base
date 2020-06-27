/* global document, Image */

import range from './range';

import {
  FILL_STYLE,
  STROKE_STYLE,
  LETTER_SIZE,
  LETTER_SPACING,

  NUMBERS,
} from './constants';

class FaviconCount {
  constructor(options = {}) {
    if (!options.fallbackIcon) {
      console.error('FaviconCount must be provided options.fallbackIcon'); // eslint-disable-line no-console
      return;
    }

    const favicon = this.getFavicon();

    // set to true to force the fallback icon to render
    const testFallbackIcon = false;

    if (favicon && !testFallbackIcon) {
      this.faviconImage = favicon.getAttribute('href');
    } else {
      this.faviconImage = options.fallbackIcon;
    }

    [this.head] = document.getElementsByTagName('head');
  }

  static getFavicon() {
    return document.getElementById('favicon');
  }

  drawUnreadCount(_unread, callback) {
    // if greater than 99, set to '100+'
    const count = _unread > 99 ? '99+' : _unread;

    // how many digits the number of unread items is
    const digits = String(count).length;

    if (!this.textedCanvas) {
      this.textedCanvas = {};
    }

    if (!this.textedCanvas[count]) {
      this.getCanvas((iconCanvas) => {
        const textedCanvas = document.createElement('canvas');
        textedCanvas.height = iconCanvas.width;
        textedCanvas.width = iconCanvas.width;
        const ctx = textedCanvas.getContext('2d');
        ctx.drawImage(iconCanvas, 0, 0);

        ctx.strokeStyle = STROKE_STYLE;
        ctx.fillStyle = FILL_STYLE;

        // we want the number to be in the lower-right corner, but canvas
        // takes coordinates from the upper-left. so, we calculate the
        // upper-left offset with the size of the numbers.
        const padding = iconCanvas.width * 0.0625; // canvas edge to the number, as a percentage
        const topMargin = iconCanvas.height - NUMBERS['0'].length - padding; // canvas height from icon top
        const numbersWidth = NUMBERS['0'][0].length * digits + LETTER_SPACING * (digits - 1);
        let leftMargin = iconCanvas.width - numbersWidth - 1;

        if (leftMargin < 0) {
          leftMargin = 0;
        }

        // stroke
        this.drawNumber({
          digits,
          count,
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
        this.drawNumber({
          digits,
          count,
          fn: (x, y) => {
            ctx.fillRect(
              x + leftMargin,
              y + topMargin,
              LETTER_SIZE,
              LETTER_SIZE,
            );
          },
        });

        this.textedCanvas[count] = textedCanvas;

        callback(this.textedCanvas[count]);
      });
    }

    if (this.textedCanvas[count]) {
      callback(this.textedCanvas[count]);
    }
  }

  static drawNumber({
    digits,
    count,
    fn,
  }) {
    let digit;
    let numberMap;
    let numberHeight;
    let numberWidth;
    let xOffset = 0;

    range(0, digits).forEach((_, i) => {
      digit = String(count)[i];

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

  getIcon(callback) {
    this.getCanvas((canvas) => {
      callback(canvas.toDataURL('image/png'));
    });
  }

  getCanvas(callback) {
    if (!this.unreadCanvas) {
      this.unreadCanvas = document.createElement('canvas');

      const ctx = this.unreadCanvas.getContext('2d');
      const img = new Image();

      // allow cross-origin access for the image (since fallbacks may be hosted
      // on domains other than the target domain)
      img.crossOrigin = 'anonymous';

      img.addEventListener('load', () => {
        this.unreadCanvas.width = img.width;
        this.unreadCanvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        callback(this.unreadCanvas);
      }, true);

      img.src = this.faviconImage;
    } else {
      callback(this.unreadCanvas);
    }
  }

  getUnreadCountIcon(count, callback) {
    this.drawUnreadCount(count, (icon) => {
      callback(icon.toDataURL('image/png'));
    });
  }

  setIcon(icon) {
    const links = this.head.getElementsByTagName('link');

    // remove the old icon
    [].slice.call(links).forEach((link) => {
      if (link.rel === 'shortcut icon' || link.rel === 'icon') {
        this.head.removeChild(link);
      }
    });

    const newIcon = document.createElement('link');
    newIcon.type = 'image/png';
    newIcon.rel = 'shortcut icon';
    newIcon.href = icon;
    this.head.appendChild(newIcon);

    // Chrome hack for updating the favicon
    const shim = document.createElement('iframe');
    shim.width = 0;
    shim.height = 0;
    document.body.appendChild(shim);
    shim.src = 'icon';
    document.body.removeChild(shim);
  }
}

export default FaviconCount;
