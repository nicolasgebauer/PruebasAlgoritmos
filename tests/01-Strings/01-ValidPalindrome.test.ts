import { describe, it, expect } from "vitest";
import { isPalindrome } from "../../src/01-Strings/01-ValidPalindrome";

describe("isPalindrome", () => {
    it("returns true for a normalized palindrome", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });

    it("returns false for a non-palindrome", () => {
        expect(isPalindrome("race a car")).toBe(false);
    });

    it("handles empty string", () => {
        expect(isPalindrome("")).toBe(true);
    });

    it("ignores punctuation and case", () => {
        expect(isPalindrome("No 'x' in Nixon")).toBe(true);
    });

    it("handles only punctuation/spaces", () => {
        expect(isPalindrome("   ,,, !!! ")).toBe(true);
    });
});
