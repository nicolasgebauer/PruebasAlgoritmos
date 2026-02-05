/*
Remove Duplicates from Sorted Array
Arreglo ordenado: elimina duplicados in-place y retorna el nuevo largo.
*/

export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let newlength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[newlength] = nums[i];
            newlength++;
        }
    }
    return newlength;
}