const btnAdd = document.getElementById("btnAdd");
const container = document.getElementById("container");
const h1 = container.querySelector("h1");
const inputs = document.getElementById("inputs");

btnAdd.addEventListener("click", function() {
    container.classList.add("add");
    btnAdd.style.display = ("none");
    h1.classList.add("add");
    inputs.classList.add("add");
});