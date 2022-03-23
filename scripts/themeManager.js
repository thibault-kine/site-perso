document.addEventListener('DOMContentLoaded', () => {

let node = document.createElement('link');
node.id = 'theme';
node.rel = 'stylesheet';

// valeur du <select> ("auto" par défaut)
let theme = document.getElementById('theme-selector').value;
// bouton qui applique le thème
let applyBtn = document.getElementById('apply-theme');

let time = new Date();
time = time.getHours();

function themeManager() {
    
    if(theme == 'auto' || node.href == 'http://localhost/site-perso/style/auto.css') {
        if(time > 9 && time < 19) {
            // thème pendant la journée
            node.href = 'style/light.css';
        }
        else {
            // thème pendant la soirée
            node.href = 'style/dark.css';
        }
    }
    else {
        // thème choisi
        node.href = `style/${theme}.css`;
    }

    // si le node n'a pas été encore créé
    if(document.getElementById('theme') == null) {
        document.head.appendChild(node);
    }
    // si l'ancien thème ne correspond pas à l'ancien
    else {
        node.href = `style/${theme}.css`;
    }
}

applyBtn.addEventListener('click', () => {
    themeManager();
})

themeManager();

})