// this is used for calculating the all items present inside an array.

const myNumber = [1, 2, 4, 5, 6,7, 8];

const myTotal = myNumber.reduce( function(acc, currVal){
    // console.log(`acc : ${acc} and currVal : ${currVal}`);
    return acc + currVal
}, 0 )

// using arrow function 
const myTotal2 = myNumber.reduce((acc, crrVal)=> acc+crrVal, 0)

// console.log(myTotal2);

// taking example 

const shopingCart = [
    {
        courseName : "js",
        price : 2999
    },
    {
        courseName : "py",
        price : 999
    },
    {
        courseName : "swift",
        price : 9999
    },
    {
        courseName : "mobile dev course",
        price : 10999
    },
    {
        courseName : "react-js course",
        price : 6999
    },
]

// using reduce to add the price of all courses 

// const totalPriceArr = [];
// shopingCart.map((course)=>totalPriceArr.push(course.price))
// console.log(totalPriceArr)


// const totalPrice = totalPriceArr.reduce((accumulator, currentVal)=> accumulator+ currentVal , 0)
// console.log(totalPrice)


// DOING DIRECT NO NEED TO CONVERT THAT IN AN ARRAY FIRST 

const priceToPay = shopingCart.reduce((acc, item)=> acc + item.price , 0)
console.log(priceToPay)