const navButton = document.querySelector(".main-nav__button");
const navList = document.querySelector(".main-nav__list");

navButton.addEventListener("click", function() { 
    this.classList.toggle('active');
    navList.classList.toggle("active");
    this.classList.contains("active") ? this.setAttribute("aria-label", "Close menu") : this.setAttribute("aria-label", "Open menu");
})