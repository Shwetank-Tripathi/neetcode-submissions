class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map();
        for(let num of nums){
            if(!map.has(num)){
                map.set(num, 1);
                continue;
            }
            return true
        }
        return false;
    }
}
