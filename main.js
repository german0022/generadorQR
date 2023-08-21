const container = document.querySelector(".container"),
button = document.getElementById("button"),
input = document.getElementById("input"),
qr = document.getElementById("qr"),
img = document.getElementById("img");
toast = document.getElementById("toast");
close = document.getElementById("close");

button.addEventListener("click", () => {
    let qrValue = input.value;
    if(!qrValue) {
        toast.classList.add("active");
    } else {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrValue;
        img.addEventListener("load", () =>{
            container.classList.add("active");
            toast.classList.remove("active");
        });
    }
    
});

input.addEventListener("keyup", () => {
    if(!input.value) {
        container.classList.remove("active");
        
    }
});

img.addEventListener("click", () => {

    window.open(img.src, "_blank");
});

close.addEventListener("click", () => {
    toast.classList.remove("active");
});