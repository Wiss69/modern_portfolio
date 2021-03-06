// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.nav-item');

// Set the initial State of the menu
let showMenu = false;

menuBtn.addEventListener('click', toogleMenu);

function toogleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuItems.forEach((item) => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuItems.forEach((item) => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
