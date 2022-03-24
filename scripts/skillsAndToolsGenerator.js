document.addEventListener('DOMContentLoaded', () => {

const skillsContainer = document.getElementById('skills-container');
const toolsContainer  = document.getElementById('tools-container');

const filters = [
    'name',
    'imgDir',
    'skillLvl'
];

var fileURL = './data/skills-and-tools.json';
var request = new XMLHttpRequest();

request.open('GET', fileURL);
request.responseType = 'text';
request.send();

request.onload = () => {
    var skillsText = request.response;
    var skills = JSON.parse(skillsText);
    
    // 'skills'
    console.log(skills['skills']);
    for(let i = 0; i < skills['skills'].length; i++) {
        
        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = skills['skills'][i].imgDir;
        
        card.innerHTML = skills['skills'][i].name;
        skillsContainer.appendChild(card);
        card.prepend(cardImg);
    }

    // 'tools'
    console.log(skills['tools']);
    for(let i = 0; i < skills['tools'].length; i++) {
        
        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = skills['tools'][i].imgDir;

        card.innerHTML = skills['tools'][i].name;
        toolsContainer.appendChild(card);
        card.prepend(cardImg);
    }
}
})