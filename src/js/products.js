(() => {
  const productButton = document.querySelector('[data-ice-cream-btn]');
  const productCard = document.querySelector('[data-ice-cream-card]');

  productButton.addEventListener('click', () => {
    productButton.classList.toggle('arrow--turned');

    productCard.classList.toggle('products--hidden-description');
  });
})();

(() => {
  const productButton = document.querySelector('[data-ice-coffee-btn]');
  const productCard = document.querySelector('[data-ice-coffee-card]');

  productButton.addEventListener('click', () => {
    productButton.classList.toggle('arrow--turned');

    productCard.classList.toggle('products--hidden-description');
  });
})();

(() => {
  const productButton = document.querySelector('[data-milkshake-btn]');
  const productCard = document.querySelector('[data-milkshake-card]');

  productButton.addEventListener('click', () => {
    productButton.classList.toggle('arrow--turned');

    productCard.classList.toggle('products--hidden-description');
  });
})();
