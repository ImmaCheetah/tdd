function reverseString(string) {
    let finalString = '';
    if (typeof string != 'string') {
        throw new Error('Not a string');
    }
    for (let i = string.length; i >= 0; i--) {
        finalString = finalString.concat(string.charAt(i));
    }
    return finalString;
}

export { reverseString }