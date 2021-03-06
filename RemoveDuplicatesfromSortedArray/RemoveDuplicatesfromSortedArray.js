// const removeDuplicates = function(nums) {
//     let result = []
//     for(num of nums) {
//         if(!result.includes(num)) {
//             result.push(num)
//         }
//     }
//     return result
// };

// console.log(removeDuplicates([1,2,4,4]))

const removeDuplicates = function(nums) {
    if(nums.length === 0){
        return 0
    }
    let pointer1 = 0
     for(let pointer2 = 1; pointer2 < nums.length; pointer2++){
         if(nums[pointer1] !== nums[pointer2]) {
             pointer1++
             nums[pointer1] = nums[pointer2]
         }
     }
     return pointer1 + 1
};


console.log(removeDuplicates([1,2,4,5,4,5]))

function apply2(object) {
    this = object
    return this
}

Array.prototype.apply2 = apply2()