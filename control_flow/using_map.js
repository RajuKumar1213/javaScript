const myData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const data = myData.map((data) => data).filter((data) => { return data >= 4 && data < 8 })
console.log(data);