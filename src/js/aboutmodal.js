(() => {
  const refs = {
    openAboutmodalBtn: document.querySelector('[data-aboutmodal-open]'),
    closeAboutmodalBtn: document.querySelector('[data-aboutmodal-close]'),
    aboutmodal: document.querySelector('[data-aboutmodal]'),
    body: document.querySelector('body'),
  };

  refs.openAboutmodalBtn.addEventListener('click', toggleAboutmodal);
  refs.closeAboutmodalBtn.addEventListener('click', toggleAboutmodal);

  function toggleAboutmodal() {
    refs.aboutmodal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
