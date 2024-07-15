function opennav() {
    document.querySelector(".close").classList.toggle("start-0")
}
let hamburger = document.querySelector(".hamburger");
let body = document.body

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("clicked");
    body.classList.toggle("overflow-hidden");
});