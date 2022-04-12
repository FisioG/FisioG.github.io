function affichageValidity(appel) {
    var champs = document.querySelectorAll(".pChamps");
    console.log('dud')
    Array.from(champs).forEach(c => {
        let input = c.getElementsByClassName("champ");
        if(input[0].checkValidity() && input[0].value != ''){
            if(getComputedStyle(c.getElementsByClassName("validImg")[0]).zIndex==-1){
               animationLogosFormApparait(c.getElementsByClassName("validImg")[0]);
               animationLogosFormDisparait(c.getElementsByClassName("invalidImg")[0]);  
            }
               
        }
        else if(input[0].value != '' || appel == "buttonCall") {
            if(getComputedStyle(c.getElementsByClassName("invalidImg")[0]).zIndex==-1){
                animationLogosFormApparait(c.getElementsByClassName("invalidImg")[0]);
                animationLogosFormDisparait(c.getElementsByClassName("validImg")[0]);
            }

            
        }
    });
}


function animationLogosFormApparait(elt) {
    elt.animate([{
        zIndex : 1,
        opacity : getComputedStyle(elt).opacity
    },
    {
        zIndex : 1,
        opacity : 1
    }],{duration:1500});
    elt.style.zIndex = 1;
    elt.style.opacity = 1;
}

function animationLogosFormDisparait(elt) {
    elt.animate([{
        zIndex : 1,
        opacity : getComputedStyle(elt).opacity
    },
    {
        zIndex : 1,
        opacity :0
    }],{duration:1000});
    elt.style.zIndex = -1;
    elt.style.opacity = 0;
}