//hamburger menu
const ham = document.querySelector('.ham');
const nav = document.querySelector('.menu');

ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('open');
    if (nav.classList.contains('open')) {
        nav.style.height = nav.scrollHeight + "px"
    } else {
        nav.style.height = ""
    }
});