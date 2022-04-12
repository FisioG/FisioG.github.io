function ouvrir() {
    var divliens = document.getElementById("liensSlide");
    var burgerSlide = document.getElementById("menuSlide");
    var burgerButton = document.querySelector(".menu-btn");
    var proprietesSlide = getComputedStyle(burgerSlide);
    var opacityNow = proprietesSlide.opacity;
    gauche = proprietesSlide.left;
    burgerSlide.animate([
    { // from
        left: gauche,
        opacity : opacityNow
    },
    { // to
        left: 0,
        opacity : 1
    }
    ], 400);
    burgerSlide.style.left = 0;
    burgerSlide.style.opacity = 1;
}
function fermer() {
    var burgerSlide = document.getElementById("menuSlide");
    var larg = burgerSlide.offsetWidth;
    var proprietesSlide = getComputedStyle(burgerSlide);
    var opacityNow = proprietesSlide.opacity;
    gauche = proprietesSlide.left;
    burgerSlide.animate([
    { // from
        left: gauche,
        opacity : opacityNow
    },
    { // to
        left: -larg+'px',
        opacity : 0
    }
    ], {duration : 400});
    burgerSlide.style.left = -larg+'px';
    burgerSlide.style.opacity = 0;
}
