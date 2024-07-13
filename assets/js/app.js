function opennav() {
    document.querySelector(".close").classList.toggle("start-0")
}
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("clicked");
});