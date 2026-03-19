const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

// this ek tarike ka abject hai jo current scope ko batata hai 
// fucntion banake this me daldo 
// jab print karoge 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this// ye nahi likhoge to bhi chalega kyki apne aap return ho jata hai
}

const userOne = new User("hitesh", 12, true)//poora this return hooke ye aajeya 
const userTwo = new User("ChaiAurCode", 11, false)// new matlab naya instance create karna
// agar new nahi hota to userTwo aur userone me same value hoti 
console.log(userOne);
//console.log(userTwo);