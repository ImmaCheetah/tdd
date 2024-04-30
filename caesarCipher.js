function caesarCipher(string, shiftValue) {
    let cipherText = '';

    if (!shiftValue) {
        return string;
    }
    shiftValue = shiftValue % 26;
    

    for (let i = 0; i < string.length; i++) {
        string = string.toUpperCase();

        let currentCharCode = string.charCodeAt(i);

        let isValidLetter = (currentCharCode >= 65 && currentCharCode <= 90);

        if (isValidLetter) {
            if (currentCharCode + shiftValue > 90) {
                currentCharCode -= 26;
            }
            
            cipherText += (String.fromCharCode(currentCharCode + shiftValue));
        } else {
            cipherText += (String.fromCharCode(currentCharCode));

        }
    }
    return cipherText;
}

// console.log(caesarCipher('abCDEFGHIJKLMNOPQRSTUVWXYZ', 2));
// console.log('A'.charCodeAt(0));

// create alphabet array
// use shift value to loop through alphabet array and add value to each index and store that letter 
// for encryption convert string to array
// take first letter and search in alphabet, when found use same index from cipher array

export {caesarCipher}