function affichageValidity(appel) {
    var champs = document.querySelectorAll(".pChamps");
    console.log('dud')
    Array.from(champs).forEach(c => {
        let input = c.getElementsByClassName("champ");
        if(input[0].checkValidity() && input[0].value != ''){
            if(getComputedStyle(c.getElementsByClassName("validImg")[0]).zIndex==-1){
               animationLogosForm(c.getElementsByClassName("validImg")[0]);
               c.getElementsByClassName("invalidImg")[0].style.zIndex = -1;  
            }
               
        }
        else if(input[0].value != '' || appel == "buttonCall") {
            if(getComputedStyle(c.getElementsByClassName("invalidImg")[0]).zIndex==-1){
                animationLogosForm(c.getElementsByClassName("invalidImg")[0]);
                c.getElementsByClassName("validImg")[0].style.zIndex = -1;
            }

            
        }
    });
}


function animationLogosForm(elt) {
    elt.animate([{
        zIndex : 1,
        opacity : 0
    },
    {
        zIndex : 1,
        opacity : 1
    }],{duration:2000});
    elt.style.zIndex = 1;
    elt.style.opacity = 1;
}