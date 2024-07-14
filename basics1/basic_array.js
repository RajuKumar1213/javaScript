// console.log("hello I am learning array");

const marval_heros = ["Thor", "Ironman", "Spiderman"]

const dc_heros = ["Superman", "Flash", "Batman"]

marval_heros.push(dc_heros);
// console.log(marval_heros);

// using concat 
const all_heros = marval_heros.concat(dc_heros);
// console.log(all_heros);

// using spread operator 
const newAllHeros = [...marval_heros, ...dc_heros];
// console.log(newAllHeros);

// newAllHeros.forEach(element => {
//     console.log(element);
// });

// **********************

// slice and splice 

const newArr = [1, 2, 3, 4, 5, 6];
// console.log(newArr.slice(1, 5));
// console.log("A", newArr);

// using splice 
// console.log(newArr.splice(1, 4));
// console.log("B", newArr);

// console.log(Array.isArray("Raju"))
// console.log(Array.from("Raju"))
// console.log(Array.from({ name: "raju" })) // this gives empty array , because the element is not defined weather the key element should be considered as arrya or value element. 



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


