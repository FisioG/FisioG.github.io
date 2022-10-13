function changeTheme() {
    console.log(localStorage.getItem('theme'))
    if (localStorage.getItem('theme') == 'sombre') {
        let projets = document.querySelectorAll('.themes');
        Array.from(projets).forEach(element => {
            var id = element.id
            element.classList.remove(id+'--darkTheme')
            element.classList.add(id+'--lightTheme')
        });    
        localStorage.setItem('theme', 'clair');
        animLogo();
        document.getElementById('imgMode').src = 'images/logoSoleil.png';


    }
    else {
        let projets = document.querySelectorAll('.themes');
        Array.from(projets).forEach(element => {
            var id = element.id
            element.classList.remove(id+'--lightTheme')
            element.classList.add(id+'--darkTheme')
        }); 
        localStorage.setItem('theme', 'sombre');
        animLogo();
        document.getElementById('imgMode').src = 'images/logoLune.png';
    }
}

function animLogo() {
    let rotate360 = [
        { transform: 'rotate(360deg)' }
    ];
    document.querySelector("#imgMode").animate(rotate360,{duration:100,iterations:2});
}