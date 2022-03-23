function animationVerticale() {
    const elts = document.querySelectorAll(".bulle");
    Array.from(elts).forEach((element,index) => 
    {
        var positions = elementPosition(element);
        
        if(this.scrollY >= (positions.clientY-50) && this.scrollY <= positions.clientY+element.offsetHeight+50)
        {
            console.log(element.offsetHeight + 'Taille du elt');
            console.log(positions.clientY + 'position de lelt');
            element.style.paddingTop = '400px';
        }
        else {
            element.style.paddingTop = '0px';
        }
    })
}
function elementPosition (a) {
var b = a.getBoundingClientRect();
return {
    clientX: a.offsetLeft,
    clientY: a.offsetTop,
    viewportX: (b.x || b.left),
    viewportY: (b.y || b.top)
    }
}