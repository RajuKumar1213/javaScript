
const regularUser = {
    email: "vedanta@gmial.com",
    fullName : {
        userFullname : {
            fitstName : "raju",
            lastName : "vishwakarma"
        }
    }
}

// console.log(regularUser.fullName.userFullname.lastName)

// combining two objects 

const obj1 = {1: "a" , 2 : "b"}
const obj2 = {3: "c" , 4 : "d"}

// const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
// using spread operator
const obj5 = {...obj1, ...obj2}
// console.log(obj5);

// handeling data which is comming from apis

const user = [
    {
        id : 1,
        email: "r@gmail.com"
    },
    {
        id : 1,
        email: "a@gmail.com"
    },
    {
        id : 1,
        email: "r@gmail.com"
    },
]

// console.log(user[0].email)

// ********

// console.log(regularUser);
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

//checking weather that object containing a perticular propery or not.

console.log(regularUser.hasOwnProperty("raju"))


// *****************

// destructuring 

