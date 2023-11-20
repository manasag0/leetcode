let arr = [2,9,5,6,7]
let largest = arr[0]
let secondLargest = 0;

for(let i = 0;i < arr.length;i++){
    if(arr[i]>largest){
        largest= arr[i]
    }
    secondLargest= arr[i]
    if(secondLargest <largest&& secondLargest !==arr[i]){
        secondLargest = arr[i]
    }
}

console.log(secondLargest)