var moveZeroes = function(nums) {
    if(nums.length ===0) return 0;
    let shorted = nums.sort((a,b)=>a-b)
    for(i = 0; i<nums.length;i++){
        if(shorted[i]==shorted[i+1]){
            shorted.slice(0,i)
        }
        
    }
    return shorted
   
 };
console.log(moveZeroes([0,1,0,3,12]))