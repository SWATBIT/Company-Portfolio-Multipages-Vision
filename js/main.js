// Header Scroll

let nav = document.querySelector(".header");
window.onscroll = function (){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }
}