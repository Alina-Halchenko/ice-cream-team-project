(() => {
  const refsFr = {
    openFrmodalBtn: document.querySelector('[data-frmodal-open]'),
    closeFrmodalBtn: document.querySelector('[data-frmodal-close]'),
    frmodal: document.querySelector('[data-frmodal]'),
    body: document.querySelector('body'),
  };

  refsFr.openFrmodalBtn.addEventListener('click', toggleFrmodal);
  refsFr.closeFrmodalBtn.addEventListener('click', toggleFrmodal);

  function toggleFrmodal() {
    refsFr.frmodal.classList.toggle('is-hidden');
    refsFr.body.classList.toggle('no-scroll');
    }
    
     const refsLoc = {
    openLocmodalBtn: document.querySelector('[data-locmodal-open]'),
    closeLocmodalBtn: document.querySelector('[data-locmodal-close]'),
    locmodal: document.querySelector('[data-locmodal]'),
    body: document.querySelector('body'),
  };

  refsLoc.openLocmodalBtn.addEventListener('click', toggleLocmodal);
  refsLoc.closeLocmodalBtn.addEventListener('click', toggleLocmodal);

  function toggleLocmodal() {
    refsLoc.locmodal.classList.toggle('is-hidden');
    refsLoc.body.classList.toggle('no-scroll');
  }
})();