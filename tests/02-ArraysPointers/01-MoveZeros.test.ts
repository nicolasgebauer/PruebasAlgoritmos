import { describe, it, expect } from "vitest";
import { moveZeros } from "../../src/02-ArraysPointers/01-MoveZeros";

describe("moveZeros", () => {
    it("moves zeros to the end of the array", () => {
        expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
        expect(moveZeros([0, 0, 1])).toEqual([1, 0, 0]);
        expect(moveZeros([1, 2, 3])).toEqual([1, 2, 3]);
    });
    it("handles empty arrays", () => {
        expect(moveZeros([])).toEqual([]);
    });
    it("handles arrays with all zeros", () => {
        expect(moveZeros([0, 0, 0])).toEqual([0, 0, 0]);
    });
    it("handles arrays with no zeros", () => {
        expect(moveZeros([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});