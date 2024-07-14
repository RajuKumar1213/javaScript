const clock = document.querySelector("#clock");

setInterval(() => {
    const date = new Date();
    // const hour = date.getHours();
    // const minute = date.getMinutes();
    // const second = date.getSeconds();
    


    // clock.innerHTML = (`<span>${hour} : ${minute} : ${second>=0 && second <9? "0"+second : second}</span>`)
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);

