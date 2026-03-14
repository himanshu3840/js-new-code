const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//agar this hatadenge to error aayega
        //console.log(this);           // this ko print karne se poora object ke properties print ho jaate hai                      
    }

}
    //agar this hatadenge to error aayega
    // kyuki username object ki ek property hai na ki variable 
    // to this.username matlab user.username 
    //this matlab current context  

 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()

// console.log(this);// bahar emtpy aayega matlab {} bas

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); isme undefined hoga kyuki this ko ham object me use karte hai 
// }                               agar sirf this print karoge to bahut saari cheege print hokar aayegi

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh" 
    console.log(this); // yaha par {} print hoga par this.username yaha nahi kar saakte
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})//objec return karne ke liye () use karna hota hai


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // global scope ke polllution ko hatane ke liye iife ka use kartehai
// immediate execute karne ke liye
// semicolon lagana pdata hai kyuki iife ko nahi pata ki execution kaha par rokna hai 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')