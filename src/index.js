(() => {
    const refs = {
      openMenuBtn: document.querySelector(".header__btn-open"),
      closeMenuBtn: document.querySelector(".menu__btn-close"),
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

//Buy now

(() => {
  const refs = {
    openBuymodalBtn: document.querySelector('[data-buy-open]'),
    closeBuymodalBtn: document.querySelector('[data-buy-close]'),
    buymodal: document.querySelector('[data-buy]'),
    body: document.querySelector('body'),
  };

  refs.openBuymodalBtn.addEventListener('click', toggleBuymodal);
  refs.closeBuymodalBtn.addEventListener('click', toggleBuymodal);

  function toggleBuymodal() {
    refs.buymodal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();