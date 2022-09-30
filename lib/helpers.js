export const formatPrice = (price) => {
  return `$${price.toString().replace('.00', '').replace('.0', '')}`
}

export const isTouch = () => {
  if (typeof window === 'undefined') {
    return false 
  }

  if ('ontouchstart' in window) {
    return true
  }

  if (window.DocumentTouch && document instanceof DocumentTouch) {
    return true
  }

  if (window.navigator.userAgent.match(/iphone|ipad|android/i)) {
    return true
  }

  const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
  const queries = prefixes.map(prefix => `(${prefix}touch-enabled)`);

  return window.matchMedia(queries.join(",")).matches;
}

/**
 * Generates a 32 bit integer from a string
 * Reference - https://stackoverflow.com/a/7616484
 *
 * @param {string}
 * @return {int}
 */
export const hash = (string) => {
  var hash = 0, i, chr;

  if (string.toString) {
    string = string.toString() // handle numbers
  }

  if (string.length === 0) return hash;
  
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
