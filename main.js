// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('mobile-drawer');

    if (hamburger && drawer) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            drawer.classList.toggle('active');
            document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
        });
    }
});