document.addEventListener('DOMContentLoaded', () => {

let node = document.createElement('link');
node.id = 'theme';
node.rel = 'stylesheet';

let btn = document.getElementById('apply-btn');
let themeSelect = document.getElementById('theme-select');

let time = new Date();
time = time.getHours();

function themeManager() {
    
    // si le node n'a pas été encore créé
    if(document.getElementById('theme') == null) {
        document.head.appendChild(node);
    }
    else {
        document.getElementById('theme').href = `style/${themeSelect.value}.css`;
    }

    if(themeSelect.value == 'auto') {
        document.head.appendChild(node);

        if(time > 9 && time < 19) {
            // thème pendant la journée
            node.href = 'style/light.css';
        }
        else {
            // thème pendant la soirée
            node.href = 'style/dark.css';
        }
    }

    sessionStorage.setItem('theme', themeSelect.value);
}

btn.addEventListener('click', () => {

    themeManager();
});

themeManager();

})