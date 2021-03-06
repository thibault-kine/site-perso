<?php 
include "include/header.php" ;
?>

<main>

<article id="me">
    <h1><span class="hashtag">#</span> Qui suis-je ?</h1>
    <div class="article">
        <p>
            Je m'appelle <strong>Thibault Kine</strong>, j'ai 20 ans et je suis actuellement en formation
            à <a href="https://laplateforme.io/">LaPlateforme_</a> dans la promo Coding School 1.
            Ma formation consiste en 2 ans d'apprentissage et de mise en pratique à la création de sites web.
            Nous y apprenons à utiliser différents <a href="#skills">languages</a> et <a href="#tools">technologies</a> afin
            de devenir WebMasters. <br>
            Je suis passionné d'informatique et de programmation, c'est d'ailleurs ce qui m'a poussé à
            venir me former dans cette école. <br>
            <strong>Je suis très professionnel et j'aime le travail bien fait.</strong>
        </p>

        <div class="img-with-label">
            <img src="style/img/selfie.jpg"> 
            <p class="label">C'est moi !</p>
        </div>
    </div>
</article>

<article id="skills">
    <h1><span class="hashtag">#</span> Mes compétences</h1>
    <p>
        Voici les compétences que j'ai acquises durant ma formation. Il s'agit des languages, frameworks et APIs que j'ai appris à utiliser, 
        que ce soit en autodidacte ou à LaPlateforme_.
    </p>

    <div id="skills-container" class="container">
    </div>
</article>

<article id="tools">
    <h1><span class="hashtag">#</span> Mes outils</h1>
    <p>
        Il s'agit des outils (IDE, CMS, Git..) que j'utilise tous les jours dans ma vie de développeur.<br>
        Je juge également bon de souligner que je suis passionné par le développement de jeux vidéo, d'où la présence de Unity et UE4.<br>
        J'utilise GitHub Copilot en partie pour m'assister à la création de fonctionnalités complexes ; Un bon développeur est un développeur fainéant !
    </p>

    <div id="tools-container">
    </div>
</article>

<article id="portfolio">
    <h1><span class="hashtag">#</span> Mes projets</h1>
    <p>
        Voici tous les projets que j'ai réalisé durant ma formation à LaPlateforme_.<br>
        Ma formation à la Coding School a débutée avec l'HTML et le CSS, s'en est suivi le PHP et le SQL.
        Actuellement j'en suis à l'apprentissage de JavaScript, mais j'ai encore beaucoup à découvrir !
    </p>

    <?php 
    ContentGenerator::GenerateInfobox(
        "Astuce !",
        "Cliquez sur les \"cartes\" pour accéder au repo GitHub du projet.",
    )
    ?>

    <div id="projects-container" class="container">
    </div>
</article>

<article id="cv">
    <h1><span class="hashtag">#</span> Curriculum Vitae</h1>
    <ul><p>Diplômes 👨‍🎓</p>
        <li>Brevet des collèges</li>
        <li>Baccalauréat Pro "Systèmes Numériques" (mention "Bien")</li>
    </ul>

    <ul><p>Parcours 🧑‍💼</p>
        <li>Lycée Val-de-Durance (Pertuis), 2017 - 2018</li>
        <li>Lycée Charles de Gaule (Apt), 2019 - 2021</li>
        <li>LaPlateforme_ (Marseille 2e), 2021 - en cours</li>
    </ul>

    <ul><p>Expériences professionnelles 👔</p>
        <li>Stage chez <i><a href="http://www.mcii-provence.com/">MCII-Provence</a></i>, une société d'assistance informatique (Pertuis), 2017</li>
        <ul>
            <li>- Apprentissage des bases du hardware</li>
        </ul>
        <li>Job d'été chez <i><a href="https://www.mcdonalds.fr/">McDonald's</a></i> (Pertuis), 2018</li>
        <ul>
            <li>- Discipline</li>
            <li>- Spontanéité</li>
            <li>- Esprit d'équipe</li>
        </ul>
        <li>Stage chez <i><a href="https://cppdigitalmedia.com/">CPP Digital Media</a></i>, une société de développement web (Pertuis), 2020</li>
        <ul>
            <li>- Bases du développement web</li>
        </ul>
        <li>Stage chez <i><a href="https://www.yogan-developpement.fr/">Yogan Développement</a></i>, une société de développement logiciel et web (Pertuis), 2021</li>
        <ul>
            <li>- Découverte de Windev et Webdev</li>
            <li>- Apprentissage de l'utilisation de bases de données</li>
        </ul>
    </ul>

    <a href="" download="cv.pdf" class="btn">
        Télécharger le CV complet
    </a>
</article>

<article id="contact">
    <h1><span class="hashtag">#</span> Me Contacter</h1>

    <div id="contacts-container" class="container">
    </div>
</article>

</main>

<?php include_once "include/footer.php" ?>