import {capitalize} from '../capitalize';

test('it works', () => {
    expect(capitalize).toBeDefined;
})

test('returns empty string if empty string is the input', () => {
    expect(capitalize('')).toBe('');
});

test('capitalize first letter', () => {
    expect(capitalize("apple")).toBe("Apple");
});

test('return null when given no string input', () => {
    expect(capitalize(50)).toBe(null);
})

test('if input is one letter just make that uppercase', () => {
    expect(capitalize('d')).toBe('D');
}) 