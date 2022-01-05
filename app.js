const btn = document.getElementById("btn")
const input = document.getElementById("input")
const error = document.getElementById("main__error")
const accepted = document.getElementById("main__accepted")


let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

function validateEmail() {
    if (regex.test(input.value)) {        
        input.classList.remove("active")
        error.style.display = "none"
        return true;
    } else if (!input.value) {
        error.innerHTML = "Whoops! It looks like you forgot to add your email"
        input.classList.add("active")
        error.style.display = "block"
    } else {        
        error.innerHTML = "Please provide a valid email"
        input.classList.add("active")
        error.style.display = "block"
        return false;        
    }   
}

btn.addEventListener("click", validateEmail)