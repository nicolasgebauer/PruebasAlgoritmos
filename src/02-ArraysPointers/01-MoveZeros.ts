/*
Mueve todos los ceros al final sin alterar el orden relativo de los no-cero.
Ej: [0,1,0,3,12] → [1,3,12,0,0]
*/

export function moveZeros(nums: number[]): number[] {
    if (nums.length === 0) return nums;
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums, insertPos, i);
        if (nums[i] !== 0) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }
    while (insertPos < nums.length) {
        nums[insertPos] = 0;
        insertPos++;
    }
    return nums;
}   