document.addEventListener('DOMContentLoaded', () => {

const skillsContainer = document.getElementById('skills-container');
const toolsContainer  = document.getElementById('tools-container');
const projectsContainer = document.getElementById('projects-container'); 

var fileURL = './data/skills-and-tools.json';
var request = new XMLHttpRequest();

request.open('GET', fileURL);
request.responseType = 'text';
request.send();

request.onload = () => {
    var skillsText = request.response;
    var skills = JSON.parse(skillsText);
    
    // 'skills'
    for(let i = 0; i < skills['skills'].length; i++) {
        
        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = skills['skills'][i].imgDir;

        // let starContainer = document.createElement('div');
        // starContainer.className = 'skill-container';

        card.innerHTML = skills['skills'][i].name;
        skillsContainer.appendChild(card);
        // for(skill = 1; skill <= skills['skills'][i].skillLvl; skill++) {
            
        //     let skillLvlImg = document.createElement('img');
        //     skillLvlImg.src = 'style/img/star.png';
        //     skillLvlImg.className = 'star';
        //     starContainer.append(skillLvlImg);
        // }
        card.prepend(cardImg);
        // card.append(starContainer);
    }

    // 'tools'
    for(let i = 0; i < skills['tools'].length; i++) {
        
        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = skills['tools'][i].imgDir;

        // let starContainer = document.createElement('div');
        // starContainer.className = 'skill-container';

        card.innerHTML = skills['tools'][i].name;
        toolsContainer.appendChild(card);
        // for(skill = 1; skill <= skills['tools'][i].skillLvl; skill++) {

        //     let skillLvlImg = document.createElement('img');
        //     skillLvlImg.src = 'style/img/star.png';
        //     skillLvlImg.className = 'star'; 
        //     starContainer.append(skillLvlImg);
        // }
        card.prepend(cardImg);
        // card.append(starContainer);
    }

    // 'projects'   
    for(let i = 0; i < skills['projects'].length; i++) {

        let link = document.createElement('a');
        link.target = '_blank';
        link.href = skills['projects'][i].repo;

        let card = document.createElement('div');
        card.className = 'project-card';

        let title = document.createElement('p');

        let cardImg = document.createElement('img');
        cardImg.src = skills['projects'][i].imgDir;

        let langContainer = document.createElement('div');
        langContainer.className = 'lang-container';

        title.innerHTML = skills['projects'][i].name;
        card.appendChild(title);
        projectsContainer.appendChild(link);
        link.appendChild(card);

        for(let j = 0; j < skills['projects'][i].languages.length; j++) {
            let lang = document.createElement('img');
            lang.src = skills['projects'][i].languages[j].imgDir;
            lang.className = 'lang';
            langContainer.appendChild(lang);
        }
        
        card.prepend(cardImg);
        card.append(langContainer);
    }
}
})