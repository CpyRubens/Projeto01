const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const figure = document.querySelector("#goku")
const figure1 = document.querySelector("#goku1")
const figure2 = document.querySelector("#goku2")

btn.addEventListener("click", function () {
    figure.classList.add("sumir");
    figure1.classList.remove("sumir")
})

btn1.addEventListener("click", function () {
    figure1.classList.add("sumir");
    figure2.classList.remove("sumir")
})

btn2.addEventListener("click", function () {
    figure2.classList.add("sumir");
    figure.classList.remove("sumir")
})

