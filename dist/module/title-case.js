/**
 * Based on https://github.com/gouch/to-title-case by David Gouch
 * See also: http://camendesign.com/code/title-case
 */

/**
 * These are words that generally should not be capitalized in the title.
 */
var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;

/**
 * This regular exprision matches things that look like HTML tags
 */
var stripHtmlRegex = /<(?:code|var)[^>]*>.*?<\/\1>|<[^>]+>|&\S+;/g;

/**
 * This regular expression matches each word where we might want to change cases.
 */
var titleCaseRegex = /[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g;

/**
 * Take a value and make sure it really is a string.
 * null and undefined are converted to an empty string.
 */
function toString(value) {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'string') {
    return value;
  }

  return value.toString();
}

function titleCase(value) {
  var string = toString(value);

  /**
   * Remove HTML like tags and entities
   */
  var htmlReplacments = [];
  string = string.replace(stripHtmlRegex, function (match, index) {
    htmlReplacments.push({ match: match, index: index });
    return '';
  });

  /**
   * Capitalize as necessary
   */
  string = string.replace(titleCaseRegex, function (match, index, title) {
    /**
     * Determine Lower Case Words
     */
    if (index > 0 && // We're not at the start.
    index + match.length !== title.length && // A single word title is not lower case.
    match.search(smallWords) > -1 && // Small words are lower case.
    title.charAt(index - 2) !== ':' && ( // Words after a colon are not lower case.
    title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    /**
     * It's already capitalized.
     */
    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    /**
     * Capitalize it
     */
    return match.charAt(0).toUpperCase() + match.substr(1);
  });

  /**
   * Try to put the HTML tags and entities back where they belong
   */
  htmlReplacments.forEach(function (replacement) {
    string = [string.slice(0, replacement.index), replacement.match, string.slice(replacement.index)].join('');
  });
  return string;
}

export default titleCase;