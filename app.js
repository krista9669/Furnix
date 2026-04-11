const menu = document.getElementById("menu")
const list = document.getElementById("list")
const bars = document.getElementsByClassName("fa-bars")


menu.addEventListener('click', () => {
    list.classList.toggle("navList-active");
    bars.classList.toggle("fa-xmark");
})