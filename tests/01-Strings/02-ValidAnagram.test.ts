import { describe, it, expect } from 'vitest';
import { isAnagram } from '../../src/01-Strings/02-ValidAnagram';

describe('isAnagram', () => {
    it('returns true for anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    });
    it('returns false for non-anagrams', () => {
        expect(isAnagram('hello', 'world')).toBe(false);
    });
    it('is case insensitive and ignores non-alphanumeric characters', () => {
        expect(isAnagram('Astronomer', 'Moon starer!')).toBe(true);
    });
    it('handles empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });
    it('returns false for strings of different lengths', () => {
        expect(isAnagram('abc', 'ab')).toBe(false);
    });
});