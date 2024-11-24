/* -- NAVIGATION MENU TOGGLE -- */
const navMenu = document.querySelector('.nav-menu');
const navMenuBtn = document.querySelector('.nav-menu-btn');

navMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {

  // ScrollReveal Initialization
  const srTop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

//ABOUT US 
srTop.reveal('.about-us', {});
srTop.reveal('.seigi', { delay: 200 });
srTop.reveal('.image', { delay: 400 });
srTop.reveal('.claire', { delay: 500 });

});