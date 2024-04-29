import { caesarCipher } from '../caesarCipher'

test('should exist', () => {
    expect('./caesarCipher').toBeDefined();
})

test('caesar function works', () => {
    expect(caesarCipher).toBeDefined();
})

test('encrypts lowercase word with no punctuation and shift of 1', () => {
    let expected = 'BCDEFG';
    let actual = caesarCipher('abcdef', 1);
    expect(actual).toEqual(expected);
})