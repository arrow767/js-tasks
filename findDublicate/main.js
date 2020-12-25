let nums = [1, 1, 4, 5, 2, 2]

const removeDuplicates = function(nums) {
    let result = []

for(let num of nums){
  if(!result.includes(num)){
    result.push(num)
  }
}

return result
};

removeDuplicates(nums)