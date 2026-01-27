/*
Dos strings son isomorfos si hay mapeo 1-1 consistente de caracteres.
Ej: "egg", "add" → true
*/

export function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const mapChars = new Map<string, string>();
    const mappedChars = new Set<string>();
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if (mapChars.has(charS)) {
            if (mapChars.get(charS) !== charT) return false;
        } else {
            if (mappedChars.has(charT)) return false;
            mapChars.set(charS, charT);
            mappedChars.add(charT);
        }
    }
    return true;
}

