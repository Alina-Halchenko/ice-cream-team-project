'use strict';

window.addEventListener('load', windoLoad);

function windoLoad() {
  function digitsCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems
      ? digitsCountersItems
      : document.querySelectorAll('[data-digits-counter]');
    if (digitsCounters) {
      digitsCounters.forEach(digitsCounters => {
        digitsCountersAnimate(digitsCounters);
      });
    }
  }
  function digitsCountersAnimate(digitsCounter) {
    let startTimestamp = null;
    const duration = 1000;
    // const duration = parseInt(digitsCounter.dataset.digitsCounter)
    // 			? parseInt(digitsCounter.dataset.digitsCounter)
    // 			: 1000;
    const startValue = parseInt(digitsCounter.innerHTML);
    const startPosition = 0;
    const step = timestamp => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(
        progress * (startPosition + startValue)
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Поява при завантаженні
  // digitsCountersInit();

  // Поява при скролінгу
  let options = {
    threshold: 0.3,
  };
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll(
          '[data-digits-counter]'
        );
        if (digitsCountersItems.length) {
          digitsCountersInit(digitsCountersItems);
        }
        // Вимкнути відслідковування після спрацювання
        //observer.unobserve(targetElement);
      }
    });
  }, options);

  let sections = document.querySelectorAll('.page-count');
  if (sections.length) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
