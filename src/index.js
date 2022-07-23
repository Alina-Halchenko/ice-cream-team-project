(() => {
    const refs = {
      openMenuBtn: document.querySelector(".header__open-btn"),
      closeMenuBtn: document.querySelector(".menu__close-btn"),
      menu: document.querySelector(".menu"),
      body: document.querySelector("body"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();