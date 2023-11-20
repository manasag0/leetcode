var findKOr = function(nums, k) {
    for(let i = 0;i<nums.length;i++){
        if(nums[i]===k){
            return nums[i]
        }
    }
};

let nums = [7,12,9,8,9,15]
let k = 4;

console.log(findKOr(nums,k))