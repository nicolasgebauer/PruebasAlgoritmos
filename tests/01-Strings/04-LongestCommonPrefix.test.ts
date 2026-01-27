import { describe, it, expect } from "vitest";
import { longestCommonPrefix } from "../../src/01-Strings/04-LongestCommonPrefix";

describe("longestCommonPrefix", () => {
    it("returns the longest common prefix for a set of strings", () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
    it("handles an array with one string", () => {
        expect(longestCommonPrefix(["single"])).toBe("single");
    });
    it("handles an empty array", () => {
        expect(longestCommonPrefix([])).toBe("");
    });
    it("handles strings with no common prefix", () => {
        expect(longestCommonPrefix(["abc", "def", "ghi"])).toBe("");
    });
});