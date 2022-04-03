
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
    console.log('sus');
    var fleche = document.getElementById('flecheFrise');
    fleche.animate([
        {//from
            opacity : 1,
            transform: 'translate(0px, 0px)',
        },
        {
            transform: 'translate(-100px, 0px)',
            opacity : 0
        }],1400);
    }

function fonctionEntree() {
    deplFleche();
    ninterv = setInterval(deplFleche, 1400);
}

function fonctionSortie() {
    clearInterval(ninterv);
    ninterv = null;
}