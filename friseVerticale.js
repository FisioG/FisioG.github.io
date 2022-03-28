
function elementPosition (a) {
var b = a.getBoundingClientRect();
return {
    clientX: a.offsetLeft, //Position abcisse en px par rapport à la fenetre
    clientY: a.offsetTop, // Même chose en ordonnée
    viewportX: (b.x || b.left),  //Position abcisse en px par rapport à la zone d'affichage
    viewportY: (b.y || b.top) // Même chose en ordonnée
    }
}
