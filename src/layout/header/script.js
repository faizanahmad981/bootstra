function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    var navIcons = document.querySelector('.nav-icons');
    var contactBtn = document.querySelector('.contact-btn');

    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        navIcons.classList.remove('mobile');
        contactBtn.classList.remove('mobile');
    } else {
        navLinks.style.display = 'flex';
        navLinks.classList.add('mobile');
        navIcons.classList.add('mobile');
        contactBtn.classList.add('mobile');
    }
}