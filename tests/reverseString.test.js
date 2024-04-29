import {reverseString} from '../reverseString';

test('function exists', () => {
    expect(reverseString).toBeDefined();
})

test('empty string returns empty string', () => {
    expect(reverseString('')).toBe('');
})

test('reverses a simple string', () => {
    expect(reverseString('apple')).toMatch('elppa');
})

test('passes with a space in the string', () => {
    expect(reverseString('apple orange')).toBe('egnaro elppa');
})

test('passes with punctuation in the string', () => {
    expect(reverseString('apple, orange')).toBe('egnaro ,elppa');
})

test('throws error when input is not string', () => {
    expect(() => reverseString(50)).toThrow('Not a string');
})