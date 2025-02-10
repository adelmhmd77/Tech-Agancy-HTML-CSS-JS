'use strict';



// NAVBAR TOGGOLE
const navopenbtn = document.querySelector('[data-nav-open-btn]')
const navbar = document.querySelector('[data-navbar]')
const navclosebtn = document.querySelector('[data-nav-close-btn]')
const overlay = document.querySelector('[data-overlay]')

const elemArr = [navclosebtn, overlay, navopenbtn];

for(let i = 0; i<elemArr.length; i++){
    elemArr[i].addEventListener('click', function(){
        navbar.classList.toggle("active")
        overlay.classList.toggle("active")
    })
}

// toggole navbar & overlay when click any navbar link


const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

// Toggole the go to top button on scroll

const header = document.querySelector('[data-header]')
const gototop = document.querySelector('[data-go-to-top]')


window.addEventListener('scroll', function(){
  if(window.scrollY >= 400){
    header.classList.add('active')
    gototop.classList.add('active')
  }else{
    header.classList.remove('active')
    gototop.classList.remove('active')
  }
})