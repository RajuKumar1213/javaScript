const programming = ["js", "java", "python" , "cpp" , "ruby" , "swift"];

// programming.forEach((items)=>{
//     console.log(items)
// })

for (const program of programming) {
    console.log(program,)
}

// for (const key in programming) {
//     console.log(programming[key])
// }  

// iteration in object 

const myObj = {
    name : "Raju",
    age : 32,
    mob: 87743743,
    city: "ranchi"
}

for (const key in myObj) {
    console.log(`the key : ${key} and value is ${myObj[key]}`)
}