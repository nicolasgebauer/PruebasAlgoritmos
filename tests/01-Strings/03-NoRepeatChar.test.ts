import { describe, it, expect } from 'vitest';
import { firstNoRepeatChar } from '../../src/01-Strings/03-NoRepeatChar';

describe('firstNoRepeatChar', () => {
    it('returns the first non-repeating character', () => {
        expect(firstNoRepeatChar('leetcode')).toBe('l');
        expect(firstNoRepeatChar('swiss')).toBe('w');
    });
    it('returns -1 when all characters repeat', () => {
        expect(firstNoRepeatChar('aabbcc')).toBe(-1);
    });
    it('handles empty string', () => {
        expect(firstNoRepeatChar('')).toBe(-1);
    });
    it('is case sensitive', () => {
        expect(firstNoRepeatChar('aA')).toBe('a');
    });
    it('handles strings with special characters', () => {
        expect(firstNoRepeatChar('!@#!!@#a')).toBe('a');
    });
});