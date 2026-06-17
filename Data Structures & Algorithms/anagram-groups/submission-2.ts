class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for(const s of strs){
            const count = new Array(26).fill(0);
            for(const l of s){
                count[l.charCodeAt(0)-"a".charCodeAt(0)]++;
            }
            map.set(count.join(','),[...(map.get(count.join(','))||[]),s])
        }
        return Array.from(map.values());
    }
}
