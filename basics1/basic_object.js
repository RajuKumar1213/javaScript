// singleton 

//Object.create()   // this is the constructor method , in this the singolton is created. 

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Raju",
    "full name": "Raju Vishwakarma",
    [mySym] : "key1",
    age: 21,
    gender : "male",
    email: "rajuvis@gmail.com",
    isLoggedIn : false,
    lastLoggedIn: ["monday", "saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym]);
// Object.freeze(jsUser)

jsUser.greeting = function(){
    console.log("hello JS users")
}

console.log(jsUser.greeting())

