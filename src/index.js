(() => {
    const refs = {
      openMenuBtn: document.querySelector(".header__btn-open"),
      closeMenuBtn: document.querySelector(".menu__btn-close"),
      menu: document.querySelector(".menu"),
      body: document.querySelector("body"),
      mobileMenu: document.querySelector(".nav"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    refs.mobileMenu.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
})();