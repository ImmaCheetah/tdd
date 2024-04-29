import {calculator} from '../calculator'

test('function exists', () => {
    expect(calculator).toBeDefined();
})

test('adds two numbers', () => {
    expect(calculator().add(2, 2)).toBe(4);
})

test('add returns null with no arguments', () => {
    expect(calculator().add()).toBe(null);
})

test('add returns null with 1 argument', () => {
    expect(calculator().add(1)).toBe(null);
})

test('subtracts two numbers', () => {
    expect(calculator().sub(2, 2)).toBe(0);
})

test('sub returns null with no arguments', () => {
    expect(calculator().sub()).toBe(null);
})

test('sub returns null with 1 argument', () => {
    expect(calculator().sub(2)).toBe(null);
})

test('multiplies two numbers', () => {
    expect(calculator().mult(2, 2)).toBe(4);
})

test('mult returns null with no arguments', () => {
    expect(calculator().mult(1)).toBe(null);
})

test('mult returns null with 1 argument', () => {
    expect(calculator().mult("2")).toBe(null);
})

test('divides two numbers', () => {
    expect(calculator().div(4, 2)).toBe(2);
})

test('div returns null with no arguments', () => {
    expect(calculator().div(1)).toBe(null);
})

test('div returns null with 1 argument', () => {
    expect(calculator().div("2")).toBe(null);
})

test('div should not allow to divide by 0', () => {
    expect(() => calculator().div(5, 0)).toThrow("can't divide by 0");
})