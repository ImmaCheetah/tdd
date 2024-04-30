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

export {caesarCipher}