let s = "babad";

if(s.length<2){
    return s;
}
let start = 0, maxLenght = 1;
function expandAroundCenter(left, right){
    while (left>=0 && right<s.length && s[left]===s[right]){
     if(right-left+1 >maxLenght){
        start=left;
        maxLenght=right-left+1;
     }
     left--;
     right++;
       }
    for(let i = 0;i<s.length; i+=1){
        expandAroundCenter(i-1,i+1);
        expandAroundCenter(i,i+1)
    }
    return s.substring(start,start+maxLenght)
}

console.log(expandAroundCenter(start,maxLenght))