(() => {
    const refs = {
      openVideomodalBtn: document.querySelector('#open-video-modal'),
      closeVideomodalBtn: document.querySelector('#close-video-modal'),
      videomodal: document.querySelector('[data-hero-video]'),
      body: document.querySelector('body'),
    };
  
    refs.openVideomodalBtn.addEventListener('click', toggleVideomodal);
    refs.closeVideomodalBtn.addEventListener('click', toggleVideomodal);
  
    function toggleVideomodal() {
      refs.videomodal.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
  })();