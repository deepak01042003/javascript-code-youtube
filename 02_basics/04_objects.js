// const tinder= new object() // singleton object
// const tinger={} // litrals

// const obj1={1:'a', 2:'b'}
// const obj2={3:'c',4:'d'}
// //const obj3={obj1,obj2}
// // const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// // console.log(obj3)

// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))


// object destructure

const user={
    name:"Deepak Garg",
    institutemanagerofdelhi :"vivek"

}
const {institutemanagerofdelhi: int_ok}=user
// console.log(institutemanagerofdelhi)
console.log(int_ok)

// api in JSON format 
// {
//     name:"deepak"
//     ok: 99
// }
// object with no name is json
