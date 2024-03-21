// hello guys this is part 2 of javascript basics.In this part we will learn array,objects and function in depth so let's start
// console.log("hello")
const arr1=[1,2,3,4,5]
const arr2= new Array(1,2,3,4,5)
arr1.unshift(9)
// console.log(arr1)
arr1.shift()
//console.log(arr1.join())

// slice ,splice

const new1= arr1.slice(1,3)
console.log("A", new1)
console.log(arr1)
const new2= arr1.splice(1,3)
console.log("B",new2)
console.log(arr1)