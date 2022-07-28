(() => {
    const activeHeroImage = document.querySelector(".hero__img--ice-cream");
    const pinkSwitcher = document.querySelector(".schemes__circle--pink");
    const coffeeSwitcher = document.querySelector(".schemes__circle--coffee");
    const greenSwitcher = document.querySelector(".schemes__circle--green");
if (window.matchMedia("(max-width: 767px)").matches) {
    activeHeroImage.removeAttribute("usemap");
    document.querySelector(".about__img--coffee").remove();
    document.querySelector(".about__img--green").remove();
    }
    
else if (window.matchMedia("(max-width: 1199px)").matches) {    
    coffeeSwitcher.setAttribute("coords", "12, 68, 135, 148");
    greenSwitcher.setAttribute("coords", "12, 149, 135, 196");
    pinkSwitcher.setAttribute("coords", "12, 197, 135, 252");
}
    
else if (window.matchMedia("(min-width: 1200px)").matches) {    
    coffeeSwitcher.setAttribute("coords", "0, 0, 236, 254");
    greenSwitcher.setAttribute("coords", "0, 255, 236, 319");
    pinkSwitcher.setAttribute("coords", "0, 320, 236, 405");
    }
})();

