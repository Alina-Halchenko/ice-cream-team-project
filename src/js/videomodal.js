(() => {
    const refs = {
      openVideomodalBtn: document.querySelector('.hero__btn'),
      closeVideomodalBtn: document.querySelector('.videomodal__button-close'),
      videomodal: document.querySelector('.video-backdrop'),
      body: document.querySelector('body'),
    };
  
    refs.openVideomodalBtn.addEventListener('click', toggleVideomodal);
    refs.closeVideomodalBtn.addEventListener('click', toggleVideomodal);
  
    function toggleVideomodal() {
      refs.videomodal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();