/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target)=> {
    let storage = {}; // empty to check if there the num exist in the storage
    for( let [index, num] of nums.entries()){ //* Loop into all the entries of array nums[] giving us the index and the actual value of that index.
        if( storage[num]!== undefined) return [storage[num], index];
            storage[target-num] = index;
        }
    }


