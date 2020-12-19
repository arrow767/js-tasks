const toUpperCaseFirstLatter = (word) => {
    console.log(word[0].toUpperCase() + (word.slice(1)))
}

toUpperCaseFirstLatter('любое слово')

let arr = ['ass']

//Задача twoSum https://leetcode.com/problems/two-sum/

let nums = [2,5,5,11]
let target = 10
let ourSum = 0

const twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let k = i+1; k < nums.length; k++){
            if(nums[i]+nums[k] === target){
                return [i, k]
            }
        }
    }
};


// const twoSum = function(nums, target) {
//     let result = []
//     let ourSum = 0
//     for(let i = 0; i < nums.length; i++){
//         for(let k = i+1; k < nums.length; k++){
//             ourSum = nums[i]+nums[k]
//             if(ourSum === target){

//                 result.push(i, k)
//                 return result
//             }
//         }
//     }
// };

twoSum(nums, target)

//reverse integer

let x = 145_242

const reverse = x => {
    const limit = 2**31;
    const k = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * k;
};

reverse(x)

//polyndrop number
const isPalindrome = function(x) {
    return x === Number(String(x).split('').reverse().join('')) ? true : false
};

// isPalindrome(122)

let a = ~1.9

console.log(console.log(a))













