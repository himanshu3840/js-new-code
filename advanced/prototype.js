// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//.prototype is used to define properties and methods that will be shared by all instances of a constructor function.
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //__proto__: TeachingSupport// __proto is the link between differnt objects
}
console.log(TASupport.isAvailable)
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)// we can also do this to link the objects
//console.log(Teacher.isAvailable);// but be carefull as teacher can not access properties of teaching suppport but vice versa is true
// so above statement is wrong or undefined
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()