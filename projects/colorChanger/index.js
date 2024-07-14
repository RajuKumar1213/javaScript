const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor = e.target.id
                break;
            case "black":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
})