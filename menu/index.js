/* Burger*/
(function () {
    const burgerItem = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__nav");
    const menuClose = document.querySelector(".burger__nav-close");
    const menuLinks = document.querySelectorAll(".header__link");
    const menu1 = document.querySelector(".main");
    

    burgerItem.addEventListener('click', () => {
        menu.classList.add("header__nav_active");
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove("header__nav_active");
    });
    if (window.innerWidth <= 768) {
        for (let i = 0; i < menuLinks.length; i +=1) {
            menuLinks[i].addEventListener("click", () => {
                menu.classList.remove("header__nav_active");  
            });
        }
    }
    menu.addEventListener('click', () => {
        menu.classList.remove("header__nav_active");
    });
    menu1.addEventListener('click', () => {
        menu.classList.remove("header__nav_active");
    });
    
}());