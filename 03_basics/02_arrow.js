const welcome={
      user: "Deepak",
      price: 999,
      welcomemsg: function(){
        console.log(`${this.user} Welcome to the site`)
      }
}

// welcome.welcomemsg()
// welcome.user="Garg"
// welcome.welcomemsg()

// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// 


// arrow function

// const chai= (num1,num2) => {
//    return num1+ num2
// }
// console.log(chai(3,7))
 
// one more way implicit return
 
// const chai= (num1,num2) => (num1+num2)
// console.log(chai(5,9))
 
const chai=(num1,num2)=> ({user:"deepak"}) // Returning an object  

console.log(chai(8,9))