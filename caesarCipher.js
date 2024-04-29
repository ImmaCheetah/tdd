function caesarCipher(string, shiftValue) {
    return 'BCDEFG'
}

function createCipherTextArray(shiftValue) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let cipherArray = [];

    for (let i = 0; i < alphabet.length; i++) {
        cipherArray[i + shiftValue] = alphabet[i];
    }

    return cipherArray;
}

console.log(createCipherTextArray(1));

// create alphabet array
// use shift value to loop through alphabet array and add value to each index and store that letter 
// for encryption convert string to array
// take first letter and search in alphabet, when found use same index from cipher array

export {caesarCipher}