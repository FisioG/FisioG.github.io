function filtrage(language) {
    let icone = document.querySelector('.selectionne');
    if(icone != null) {icone.classList.remove('selectionne');}
    let projets = document.querySelectorAll('.projet');
    Array.from(projets).forEach(element => {
        element.classList.add('projet--hidden')
        element.classList.add('projet--transition')
    });
    projets = document.querySelectorAll('.'+language);
    Array.from(projets).forEach(element => {
        element.classList.remove('projet--hidden')
    });
    icone = document.querySelector('.img'+language);
    icone.classList.add('selectionne');
}

function verifSelect(language) {
    let icone = document.querySelector('.selectionne');
    if(icone != null && icone.classList.contains('img'+language)) {
        let projets = document.querySelectorAll('.projet');
        Array.from(projets).forEach(element => {
            element.classList.remove('projet--hidden')
        });
        icone.classList.remove('selectionne');
    }
    else {filtrage(language)}
}
