class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        const result = [];
        for(let i=0;i<strs.length;i++){
            const sortedWord = strs[i].split('').sort().join('');
            map.set(sortedWord, [...(map.get(sortedWord)||[]),strs[i]])
        }
        for(const value of map.values()){
            result.push(value);
        }
        return result;
    }
}
