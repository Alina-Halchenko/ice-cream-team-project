(() => {
const activeHeroImage = document.querySelector(".hero__img--ice-cream");
if (window.matchMedia("(max-width: 768px)").matches) {
activeHeroImage.removeAttribute("usemap");
}
})();