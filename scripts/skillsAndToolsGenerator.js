document.addEventListener('DOMContentLoaded', () => {

const skillsContainer = document.getElementById('skills-container');
const toolsContainer  = document.getElementById('tools-container');
const projectsContainer = document.getElementById('projects-container'); 
const contactsContainer = document.getElementById('contacts-container');

var fileURL = './data/data.json';
var request = new XMLHttpRequest();

request.open('GET', fileURL);
request.responseType = 'text';
request.send();

request.onload = () => {
    var skillsText = request.response;
    var data = JSON.parse(skillsText);
    
    // 'skills'
    for(let i = 0; i < data['skills'].length; i++) {
        
        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = data['skills'][i].imgDir;

        // let starContainer = document.createElement('div');
        // starContainer.className = 'skill-container';

        card.innerHTML = data['skills'][i].name;
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
    for(let i = 0; i < data['tools'].length; i++) {
        
        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = data['tools'][i].imgDir;

        // let starContainer = document.createElement('div');
        // starContainer.className = 'skill-container';

        card.innerHTML = data['tools'][i].name;
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
    for(let i = 0; i < data['projects'].length; i++) {

        let link = document.createElement('a');
        link.target = '_blank';
        link.href = data['projects'][i].repo;

        let card = document.createElement('div');
        card.className = 'project-card';

        let title = document.createElement('p');
        title.innerHTML = data['projects'][i].name;

        let cardImg = document.createElement('img');
        cardImg.src = data['projects'][i].imgDir;

        let langContainer = document.createElement('div');
        langContainer.className = 'lang-container';
        
        for(let j = 0; j < data['projects'][i].languages.length; j++) {
            let lang = document.createElement('img');
            lang.src = data['projects'][i].languages[j].imgDir;
            lang.className = 'lang';
            langContainer.append(lang);
        }
        
        card.appendChild(title);
        projectsContainer.appendChild(link);
        link.appendChild(card);
        card.prepend(cardImg);
        card.append(langContainer);
    }

    // 'contacts'
    for(let i = 0; i < data['contacts'].length; i++) {

        let link = document.createElement('a');
        link.href = data['contacts'][i].link;
        
        let title = document.createElement('p');
        title.innerHTML = data['contacts'][i].name;

        let card = document.createElement('div');
        card.className = 'card';

        let cardImg = document.createElement('img');
        cardImg.src = data['contacts'][i].imgDir;
        
        card.appendChild(title);
        contactsContainer.appendChild(link);
        link.appendChild(card);
        card.prepend(cardImg);
    }
}
})