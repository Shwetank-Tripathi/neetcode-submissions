class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for(let i=0;i<strs.length;i++){
            const sortedWord = strs[i].split('').sort().join('');
            map.set(sortedWord, [...(map.get(sortedWord)||[]),strs[i]])
        }
        return Array.from(map.values());
    }
}
