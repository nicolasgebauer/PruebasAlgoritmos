/*
Dado un string, determina si es palíndromo ignorando espacios, signos y mayúsculas/minúsculas. No uses reverse.
Ej: "A man, a plan, a canal: Panama" → true
*/

export function isPalindrome(s: string): boolean {
    const alphanumericChars = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = alphanumericChars.length - 1;
    while (left < right) {
        if (alphanumericChars[left] !== alphanumericChars[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
