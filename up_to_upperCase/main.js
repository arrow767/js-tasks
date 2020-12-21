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