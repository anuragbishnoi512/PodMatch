function opennav() {
    document.querySelector(".close").classList.toggle("start-0")
}
let hamburger = document.querySelector(".hamburger");
let body = document.body

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("clicked");
    body.classList.toggle("overflow-hidden");
});

let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}