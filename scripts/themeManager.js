document.addEventListener('DOMContentLoaded', () => {

let node = document.createElement('link');
node.id = 'theme';
node.rel = 'stylesheet';

let time = new Date();
time = time.getHours();

function themeManager() {
    
    // si le node n'a pas été encore créé
    if(document.getElementById('theme') == null) {
        document.head.appendChild(node);
    }

    if(time > 9 && time < 19) {
        // thème pendant la journée
        node.href = 'style/light.css';
    }
    else {
        // thème pendant la soirée
        node.href = 'style/dark.css';
    }
}

themeManager();

})