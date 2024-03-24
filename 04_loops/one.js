// for of loop
let arr=["Delhi","London","Mumbai","Jaipur","Tohana"]

for (let item of arr){
    // console.log(item)
}

const obj={
    name:"Deepak",
    state: "Delhi",
    hometown: "Tohana"

}
// for (let item of obj){
//     // console.log(item)
// }

let map= new Map()
map.set("dl","Delhi")
map.set("ln","London")
map.set("mu","mumbai")
// map.set("l","Delhi")
// console.log(map)

for (let [item,val] of map){
    // console.log(val)
}

// for in loop for object

for(let item in obj){
//     console.log(obj[item])
}

for(let item in arr){
    // console.log(item)
}


// for each (basiccaly for array )

arr.forEach(function (item) {
    // console.log(item)
})
 

arr.forEach((item)=>{
    // console.log(item)
})




