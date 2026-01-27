import { describe, it, expect } from "vitest";
import { stringCompression } from "../../src/01-Strings/05-StringCompresion";

describe("stringCompression", () => {
    it("compresses strings with consecutive character repetitions", () => {
        expect(stringCompression("aaabb")).toBe("a3b2");
        expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
    });
    it("returns original string if compression does not reduce size", () => {
        expect(stringCompression("abc")).toBe("abc");
        expect(stringCompression("aabb")).toBe("aabb");
    });
    it("handles empty string", () => {
        expect(stringCompression("")).toBe("");
    });
    it("handles strings with single characters", () => {
        expect(stringCompression("a")).toBe("a");
        expect(stringCompression("bbbb")).toBe("b4");
    });
    it("is case sensitive", () => {
        expect(stringCompression("aaAAA")).toBe("a2A3");
    });
});