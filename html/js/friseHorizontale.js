
function elementPosition (a) {
var b = a.getBoundingClientRect();
return {
    clientX: a.offsetLeft, //Position abcisse en px par rapport à la fenetre
    clientY: a.offsetTop, // Même chose en ordonnée
    viewportX: (b.x || b.left),  //Position abcisse en px par rapport à la zone d'affichage
    viewportY: (b.y || b.top) // Même chose en ordonnée
    }
}
function scrollLeft(){
    var tmp = document.getElementById('Frise');
    tmp.scrollLeft = tmp.scrollWidth;
}

let ninterv;


function deplFleche() {
    var fleche = document.getElementById('flecheFrise');
    fleche.animate([
        {opacity : 0},
        {opacity : 1},
        {transform: 'translate(-25px, 0px)'},
        {opacity : 0},
        {transform: 'translate(-65px, 0px)'},

    ],{duration : 1400});
    }

function fonctionEntree() {
    ninterv = setInterval(deplFleche, 1400);
}

function fonctionSortie() {
    clearInterval(ninterv);
    ninterv = null;
}