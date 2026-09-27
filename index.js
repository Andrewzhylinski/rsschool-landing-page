/* Burger*/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() 
    {
        document.querySelector(".header__wrapper").classList.toggle("open");
        document.querySelector("body").classList.toggle("noscroll__nav")
    })
})


document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    // Действие при клике
    document.querySelector(".header__wrapper").classList.remove("open");
    document.querySelector("body").classList.remove("noscroll__nav")
});
