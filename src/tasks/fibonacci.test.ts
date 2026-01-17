import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  getFibonacciNumberTopDown,
  getFibonacciNumberBottomUp,
  getFibonacciSequence,
} from "./fibonacci.ts";

describe("getFibonacciNumberTopDown", () => {
  it("should return Fibonacci number", () => {
    // 0 1 1 2 3 5 8 13 21 34 55 89

    assert.equal(getFibonacciNumberTopDown(10, new Map()), 55);
  });
});

describe("getFibonacciNumberBottomUp", () => {
  it("should return Fibonacci number", () => {
    // 0 1 1 2 3 5 8 13 21 34 55 89

    assert.equal(getFibonacciNumberBottomUp(10), 55);
  });
});

describe("getFibonacciSequence", () => {
  it("should return sequence", () => {
    const expectedResult = [0, 1, 1, 2, 3, 5, 8, 13, 21];
    const number = 8;

    assert.deepEqual(getFibonacciSequence(number), expectedResult);
  });
});
