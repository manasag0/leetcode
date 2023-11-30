// bubble short
//asending order

const bubbleShot=(array)=>{
 
    for(let i = 0;i<array.length;i++){
        for(let j = 0; j< array.length-i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
 return array
}

console.log(bubbleShot([6,3,1,5,2,4]))