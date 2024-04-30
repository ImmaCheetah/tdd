import { analyzeArray } from "../analyzeArray";
const object = analyzeArray([1,8,3,4,2,6]);

test('analyze function works/exists', () => {
    expect(analyzeArray).toBeDefined();
})

test('returns correct average', () => {
    let expected = 4;
    let actual = object.average;
    expect(actual).toBe(expected);
})

test('returns correct minimum', () => {
    let expected = 1;
    let actual = object.min;
    expect(actual).toEqual(expected);
})

test('returns correct maximum', () => {
    let expected = 8;
    let actual = object.max;
    expect(actual).toEqual(expected);
})

test('return correct length', () => {
    expect(object.length).toEqual(6);
})

test('throws error if invalid input', () => {
    expect(() => analyzeArray('hello')).toThrow('Invalid input');
})

test('throws error if no input', () => {
    expect(() => analyzeArray()).toThrow('No input');
})

test('throws error if array has string', () => {
    expect(() => analyzeArray([1, 2, 'three'])).toThrow('Array contains string');
})
