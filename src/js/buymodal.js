(() => {
    const refs = {
      openBuymodalBtn: document.querySelector('header__btn-buy'),
      closeBuymodalBtn: document.querySelector('buy-modal__button-close'),
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