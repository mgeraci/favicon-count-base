/*
 * This helper converts either an html object set OR a NodeList (used on older
 * iOS devices, roughly iOS version 8.1 and earlier) into an array for looping.
 *
 * @param {nodelist|object} nodes - a NodeList or a list of html objects
 * @returns {array} - an array
 */
export default function (nodes) {
  return [].slice.call(nodes);
}
