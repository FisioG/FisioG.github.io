function affichageValidity() {
    var champs = document.querySelectorAll(".champ");
    Array.from(champs).forEach(c => {
        if(valid(c)){
            c.style.backgroundColor = 'green';
        }
        else {
            c.style.backgroundColor = 'red';
        }
    });
}

function valid(champ) {
    return champ.value != '';
}