// singleton 
// object.create

// object literals
let mysym= Symbol("key1");

const Jsuser={
    name: "Deepak",
    age: 20,
    gmail: "deep01jigarg@gmail.com",
    "location": "Delhi",
    [mysym]: "key2",// only way to declear symbol
}

// console.log(Jsuser.name)
// console.log(Jsuser["name"])
// console.log(Jsuser["location"])// only option left
// console.log(Jsuser[mysym])// only way to get symbol

// Object.freeze(Jsuser)// we can not change value of any key now

Jsuser.greeting= function(){
    console.log("Heelo")
}
Jsuser.greeting()
Jsuser.greeting2= function(){
    console.log(`Hello, ${this[mysym]}`)

}
Jsuser.greeting2()