window.onload = () => {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth >= 768) {
    (() => {
    const pinkSwitcher = document.querySelector(".schemes__circle--pink");
    const body = document.querySelector("body");

    pinkSwitcher.addEventListener("click", () => {
        body.classList.remove("coffee-scheme", "green-scheme");
    });
    
})();

(() => {

    const coffeeSwitcher = document.querySelector(".schemes__circle--coffee");
    const body = document.querySelector("body");

    
    coffeeSwitcher.addEventListener("click", () => {
        body.classList.remove("green-scheme");
        body.classList.add("coffee-scheme");
    });

})();

(() => {
    const greenSwitcher = document.querySelector(".schemes__circle--green");
    const body = document.querySelector("body");
    
    greenSwitcher.addEventListener("click", () => {
        body.classList.remove("coffee-scheme");
        body.classList.add("green-scheme");

    });
})();
    }
};
