function caesarCipher(string, shiftValue) {
    let cipherText = '';

    if (!shiftValue) {
        return string;
    }

    for (let i = 0; i < string.length; i++) {
        let currentCharCode = string.charCodeAt(i) + shiftValue;
        if (currentCharCode > 90) {
            currentCharCode = 65;
        }
        cipherText += (String.fromCharCode(currentCharCode).toUpperCase());
    }

    return cipherText;

}


// create alphabet array
// use shift value to loop through alphabet array and add value to each index and store that letter 
// for encryption convert string to array
// take first letter and search in alphabet, when found use same index from cipher array

// function createCipherTextArray(shiftValue) {
//     let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//     let cipherArray = new Array(26).fill(null);

//     for (let i = 0; i < alphabet.length; i++) {
//         cipherArray[i + shiftValue] = alphabet[i];
//     }
//     return cipherArray;
// }

// console.log(createCipherTextArray(9));
export {caesarCipher}