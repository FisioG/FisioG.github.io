function affichageValidity() {
    var champs = document.querySelectorAll(".champ");
    Array.from(champs).forEach(c => {
        if(c.checkValidity() && c.value != ''){
            c.style.backgroundColor = 'green';
        }
        else {
            c.style.backgroundColor = 'red';
        }
    });
}