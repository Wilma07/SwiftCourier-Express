
// JavaScript to handle dynamic interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website is ready!');
    const toggleMenu = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    toggleMenu.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });
});
