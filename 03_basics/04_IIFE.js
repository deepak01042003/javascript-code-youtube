// Immediatly Invoked Function Expression (IIFE)

//(/define function here)(function runner)

(function chai(){
    // named IIFE
    console.log("Hello deepak")
})();// in this function scope variables and pollution is not present

( (name) => {
    console.log(`hello ${name} again`)
} )("deepak")