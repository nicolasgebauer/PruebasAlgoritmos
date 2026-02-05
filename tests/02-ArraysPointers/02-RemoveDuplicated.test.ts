import { describe, it, expect } from "vitest";
import { removeDuplicates } from "../../src/02-ArraysPointers/02-RemoveDuplicated";

describe("removeDuplicates", () => {
    it("removes duplicates from sorted array", () => {
        expect(removeDuplicates([1, 1, 2])).toBe(2);
        expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    });
    it("handles empty array", () => {
        expect(removeDuplicates([])).toBe(0);
    });
    it("handles array with no duplicates", () => {
        expect(removeDuplicates([1, 2, 3, 4, 5])).toBe(5);
    });
    it("handles array with all duplicates", () => {
        expect(removeDuplicates([2, 2, 2, 2])).toBe(1);
    });
});
