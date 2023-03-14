
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.getElementById("child1").addEventListener("click", function() {
    window.location.href = "/bad.html";
});
  
document.getElementById("child2").addEventListener("click", function() {
    window.location.href = "/better.html";
});