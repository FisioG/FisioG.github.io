function filtrage(language) {
    let icone = document.querySelector('.selectionne');
    if(icone != null) {icone.classList.remove('selectionne');}
    let projets = document.querySelectorAll('.projet');
    Array.from(projets).forEach(element => {
        element.style.display = 'none';
    });
    projets = document.querySelectorAll('.'+language);
    Array.from(projets).forEach(element => {
        element.style.display = 'flex';
    });
    icone = document.querySelector('.img'+language);
    icone.classList.add('selectionne');
}

function verifSelect(language) {
    let icone = document.querySelector('.selectionne');
    if(icone != null && icone.classList.contains('img'+language)) {
        let projets = document.querySelectorAll('.projet');
        Array.from(projets).forEach(element => {
            element.style.display = 'flex';
        });
        icone.classList.remove('selectionne');
    }
    else {filtrage(language)}
}
