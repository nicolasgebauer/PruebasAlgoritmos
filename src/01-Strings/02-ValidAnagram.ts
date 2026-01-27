/*
Determina si dos strings son anagramas (mismas letras con misma frecuencia).
Ej: "listen", "silent" → true
*/

export function isAnagram(s: string, t: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    t = t.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (s.length !== t.length) return false;
    const charCount: Record<string, number> = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    return true;
}