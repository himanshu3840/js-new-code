class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    } 

    get password(){
        return this._password
    }

    set password(value){
        this._password=value.toUpperCase()
    }
    
    get email(){
        return this._email
    }
    set email(value){
        this._email=value.toUpperCase();
        // underscore email ki jagah aur koi variable bhi use kar sakte ho
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);

//iska use tab karte hai jub hame kuch maniplute karke vlaue ko send karna hota hai 
// ya fir english me -  Getters and setters are used to CONTROL how properties are accessed and modified.
//chahe to set karte time kardo 
//chahe get karte time

 //using defineproperty-old method

 function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);