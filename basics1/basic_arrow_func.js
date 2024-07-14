
const user = {
    username: "Raju",
    age: 21,
    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`),
        console.log(this)
    }
}

// "THIS" KEYWORD ONLY WORKS WITH TEH OBJECTS NOT WITH THE FUNCTIONS

// console.log(user.welcomeMessage());
// user.username = "Rahul"
// console.log(user.welcomeMessage());

//console.log(this) // IN NODE RETURNS A EMPTY OBJECT .

function chai() {
    // console.log(this)
    const username = "raju"
    console.log(this.username)
}

// chai()

const chai2 = function() {
    // console.log(this)
    let username = "raju"
    console.log(this.username)
    console.log("this is the answer of the chai 2 ");
}

// chai2()


// ARROW FUNCTOIN
const chai3 = () => {
    // console.log(this)

    console.log(this.username)
    console.log("this is the answer of the chai 3 ");
}

// chai3()

// ++++++++++++++++++++++++
//EXPLICIT RETURN 
const addTwo = (num1, num2) =>{
    return num1+ num2
}
// console.log(addTwo(3,4))

// IMPLICIT ARROW FUNCTION: ASSUMES FUNCTION WILL RETURN SOMETHING 
// const addTwo2 = (num1, num2) => num1+ num2   :  METHOD.1
const addTwo2 = (num1, num2) => (num1+ num2)      // METHOD.2
// console.log(addTwo2(3,4))


// RETURNING OBJECT 
const returnObj = () => ({username : "raju"})

console.log(returnObj())
