
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

function deplFleche() {
    var fleche = document.getElementById('flecheIndique');
    fleche.animate([
        {//from
            opacity : 1,
            transform: 'translate(0px, 0px)',
        },
        {
            transform: 'translate(-100px, 0px)',
            opacity : 0
        }],1000)
}