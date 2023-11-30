let x = "anagram"
let y = "nagaram"
function anagram(x,y){
return x.split("").sort().join("")===y.split("").sort().join("")
}

console.log(anagram(x,y))