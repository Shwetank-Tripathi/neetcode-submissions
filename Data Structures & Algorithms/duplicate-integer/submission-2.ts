class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map();
        for(let num of nums){
            if(!map.has(num)) map.set(num, 1);
            else {
                let k = map.get(num);
                map.set(num, ++k);
            }
        }
        for(const count of map.values()){
            if(count>1) return true;
        }
        return false;
    }
}
