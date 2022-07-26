const iceCream = document.querySelector(".hero__img--ice-cream");
const clickMe = document.querySelector(".hero__img--prompt");

iceCream.addEventListener("mouseenter", () => {
    clickMe.classList.add("visible");
    })
    iceCream.addEventListener("mouseleave",()=>{
        clickMe.classList.remove("visible");
    })
