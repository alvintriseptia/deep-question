const hamburger = document.getElementById("hambBtn");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener('click', function(){
    mobileMenu.classList.toggle("hambClick");
    
});