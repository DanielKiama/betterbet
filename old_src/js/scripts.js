'use strict'

const BurgerBtn =  document.querySelector('.burger-js');
const mobileMenu =  document.querySelector('.mobile-menu-js');
const mobileMenuClose =  document.querySelector('.mobile-menu-close-js');

BurgerBtn.addEventListener('click',()=>{
    mobileMenu.classList.add('mobile-menu--active');
});

mobileMenuClose.addEventListener('click',()=>{
    mobileMenu.classList.remove('mobile-menu--active');
});


console.log('fff');