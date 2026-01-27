/*
Devuelve el primer carácter que aparece una sola vez; si no existe, devuelve -1.
Ej: "leetcode" → 'l'
*/

export function firstNoRepeatChar(s: string): string | -1 {
    const uniqueChars = new Set<string>();
    const repeatingChars = new Set<string>();
    for (const char of s) {
        if (uniqueChars.has(char)) {
            uniqueChars.delete(char);
            repeatingChars.add(char);
        } else if (!repeatingChars.has(char)) {
            uniqueChars.add(char);
        }
    }
    return uniqueChars.size > 0 ? uniqueChars.values().next().value! : -1;
}

