const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.addEventListener('click', function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('active');


  
});




