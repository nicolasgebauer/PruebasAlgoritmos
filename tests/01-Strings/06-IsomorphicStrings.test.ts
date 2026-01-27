import { describe, it, expect } from "vitest";
import { isIsomorphic } from "../../src/01-Strings/06-IsomorphicStrings";

describe("isIsomorphic", () => {
    it("returns true for isomorphic strings", () => {
        expect(isIsomorphic("egg", "add")).toBe(true);
        expect(isIsomorphic("paper", "title")).toBe(true);
    });
    it("returns false for non-isomorphic strings", () => {
        expect(isIsomorphic("foo", "bar")).toBe(false);
        expect(isIsomorphic("ab", "aa")).toBe(false);
    });
    it("handles empty strings", () => {
        expect(isIsomorphic("", "")).toBe(true);
    });
    it("handles strings of different lengths", () => {
        expect(isIsomorphic("a", "aa")).toBe(false);
    });
});