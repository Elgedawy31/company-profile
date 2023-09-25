const button = document.querySelector(".register");
const alert = document.querySelector(".gray");
const red = document.querySelector(".over");
const btn2 = document.querySelector(".done");

button.onclick=()=>{
    alert.classList.add("alert")
    alert.classList.remove("d_none")
    red.classList.add("alert2")
};

red.onclick=()=>{
    alert.classList.remove("alert")
    alert.classList.add("d_none")
    red.classList.remove("alert2")
}

btn2.onclick=()=>{
    alert.classList.remove("alert")
    alert.classList.add("d_none")
    red.classList.remove("alert2")
}