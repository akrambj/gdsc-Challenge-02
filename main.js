let hamburger = document.querySelector('#menu');
let navMenu = document.querySelector('.navMenu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

console.log(hamburger);
console.log(navMenu);

const header = document.querySelector("header")


document.addEventListener("scroll", function(){
    let y = scrollY

    if (y>=80) {
        header.style.backgroundColor = "white",
        header.style.boxShadow = "";
    } else {
        header.style.backgroundColor = "transparent"
    }
})