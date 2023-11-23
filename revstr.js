function reverseStr(nums){
    let result = [];
    let temp =[]
    
    function recursive(nums,i){
        if (i === nums.length) {
            return result.push([...temp])
        }

        temp.push(nums[i])
        recursive(nums,i+1)
        temp.pop()
        recursive(nums,i+1)
    }
recursive(nums,0)
 return result
}

console.log(reverseStr([1,2,3]))