let array = [1,2,3,4,5]

// array.map((item,index,array)=>{
//    console.log(item+5)
// })

// let newFilter =array.filter((item)=>{
//     return item >=3
// })


// reduce

// let reduce = array.reduce((prev,item)=>{
//     return prev+=item;
// },10)

// console.log(reduce)
//some

// let some = array.some(()=>{
//     return array=5
// })

// every

// let every = array.every((item)=>{
//     return item <=5
// })

//find
// let find = array.find((item)=>{
//     return item >4
// })

// console.log(find)

//spread and rest

let arr = [6,7,8,9,10];

// function numbers(...nums){
//     return nums
// }

// console.log(numbers(...array,...arr,...arr))

// concat

// function concate(arr,array){
//     return array.concat(arr)
// }

// console.log(concate(arr,array))


// slice


// const slice = (arr)=>{
//    return arr.slice(0,3)
// }

// console.log(slice(arr))


//splice


// arr.splice(2,4,100)

//fill

// const newArr = arr.fill(2,4)

//findIndex
// let newAr = arr.findIndex((item)=>{
//     return item === 10
// })
// console.log(newAr)

//flat
    let arrN = arr.concat(array,[129,1291,[123,48],1239])
    let fatted = arrN.flat()

    // console.log(...fatted)

    console.log(fatted.sort((a,b)=>b-a))