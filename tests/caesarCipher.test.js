import { caesarCipher } from '../caesarCipher'


test('caesar function exists/defined', () => {
    expect(caesarCipher).toBeDefined();
})

test('works with 1 letter', () => {
    expect(caesarCipher('A', 1)).toEqual('B');
})

test('returns string if no shift value', () => {
    expect(caesarCipher('hello')).toEqual('hello');
})

test('encrypts lowercase word with no punctuation and shift of 1', () => {
    let expected = 'BCDEFG';
    let actual = caesarCipher('abcdef', 1);
    expect(actual).toEqual(expected);
})

test('works with shift value bigger than 1', () => {
    let expected = 'CDEFGHIJKLMNOPQRSTUVWXYZAB';
    let actual = caesarCipher('abcdefghijklmnopqrstuvwxyz', 2);
    expect(actual).toEqual(expected);
})

test('works with uppercase', () => {
    let expected = 'BCD';
    let actual = caesarCipher('ABC', 1);
    expect(actual).toEqual(expected);
})

test('works with uppercase AND lowercase', () => {
    let expected = 'BCD';
    let actual = caesarCipher('aBC', 1);
    expect(actual).toEqual(expected);
})

// test('works with shift value bigger than string length', () => {
//     let expected = 
// })

test.skip('encrypts word with punctuation', () => {
    let expected = 'IFMMP?';
    let actual = caesarCipher('hello,', 1);
    expect(actual).toEqual(expected);
})