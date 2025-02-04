const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    const result = document.querySelector("#result");

    if (height === '' || height === null || isNaN(height) || height < 0) {
        result.innerHTML = (`Please enter valid height ${height}`)
    }
    else if (weight === '' || weight === null || isNaN(weight) || weight < 0) {
        result.innerHTML = (`Please enter valid weight ${weight}`)
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            result.innerHTML = (`<span>${bmi} , Under Weight</span>`)
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = (`<span>${bmi} , Normal Range</span>`)
        } else {
            result.innerHTML = (`<span>${bmi} , Overweight</span>`)

        }
    }
})