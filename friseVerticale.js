function animationVerticale() {
    const elts = document.querySelectorAll(".bulle");
    Array.from(elts).forEach((element,index) => 
    {
        var positions = elementPosition(element);
        var propBulles = getComputedStyle(element);
        console.log(scrollY);
        if(this.scrollY-200 >= (positions.clientY-200) && this.scrollY <= positions.clientY+400)
        { //Ouverture bulle
            element.animate([
                {
                    paddingTop : propBulles.paddingTop,
                    paddingRight : propBulles.paddingRight,
                },
                {
                    paddingTop : '400px',
                    paddingRight : '1400px',
                }
            ],450);
            element.style.paddingTop = '400px';
            element.style.paddingRight = '1400px';
        }
        else { //Fermeture bulle
            element.animate([
                {
                    paddingTop : propBulles.paddingTop,
                    paddingRight : propBulles.paddingRight,
                },
                {
                    paddingTop : '0px',
                    paddingRight : '0px',
                }
            ],600);
            element.style.paddingTop = '0px';
            element.style.paddingRight = '0px';
        }
    })
}
function elementPosition (a) {
var b = a.getBoundingClientRect();
return {
    clientX: a.offsetLeft, //Position abcisse en px par rapport à la fenetre
    clientY: a.offsetTop, // Même chose en ordonnée
    viewportX: (b.x || b.left),  //Position abcisse en px par rapport à la zone d'affichage
    viewportY: (b.y || b.top) // Même chose en ordonnée
    }
}
