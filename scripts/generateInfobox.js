document.addEventListener('DOMContentLoaded', () => {

function generateInfobox(parent, title, body) {

    let _parent = document.getElementById(parent);

    let root = document.createElement('div');
    root.className = 'info-box';

    let infoIcon = document.createElement('img');
    infoIcon.className = 'info-icon';
    infoIcon.href = 'style/img/info.png';
    root.appendChild(infoIcon);

    let div = document.createElement('div');
    root.appendChild(div);

    let _title = document.createElement('h2');
    _title.innerHTML = title;
    div.appendChild(_title);

    let _body = document.createElement('p');
    _body.innerHTML = body;
    div.appendChild(_body);

    _parent.appendChild(root);
}

})