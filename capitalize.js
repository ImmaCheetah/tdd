function capitalize(string) {
    // let firstLetter = string.charAt(1);
    if (typeof string != 'string') {
        return null
    }
    // if (string === '') {
    //     return '';
    // }
    // if (string.length == 1) {
    //     return string.toUpperCase();
    // }
    return string.charAt(0).toUpperCase().concat(string.substring(1, string.length));
  }
export {capitalize}