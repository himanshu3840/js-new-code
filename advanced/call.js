function SetUsername(username){
    //complex DB calls
    this.username = username
    //console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)// agar .call nahi hoga to fucntion call to hoga but this will not get updated
    // this ko bhi passs karne ka matlab hai ki he fucntion use my this to update the info

   
    this.email = email// this current exucution context ko point karta hai
    this.password = password
   // console.log(this);
}
console.log(this);
const chai = new createUser("chai", "chai@fb.com", "123")
//console.log(chai);