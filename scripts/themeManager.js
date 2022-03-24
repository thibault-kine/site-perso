document.addEventListener('DOMContentLoaded', () => {

let node = document.createElement('link');
node.id = 'theme';
node.rel = 'stylesheet';

// bouton qui applique le thème
let applyBtn = document.getElementById('apply-theme');

let time = new Date();
time = time.getHours();

function themeManager() {
    
    // si le node n'a pas été encore créé
    if(document.getElementById('theme') == null) {
        document.head.appendChild(node);
    }
    else {
        document.getElementById('theme').href = `style/${document.getElementById('theme-selector').value}.css`;
    }

    if(document.getElementById('theme-selector').value == 'auto') {
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
        node.href = `style/${document.getElementById('theme-selector').value}.css`;
    }
}

applyBtn.addEventListener('click', () => {
    themeManager();
})

themeManager();

})