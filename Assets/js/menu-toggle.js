document.addEventListener('DOMContentLoaded', (event) => {
    const navToggle = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
});