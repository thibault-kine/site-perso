<?php 
include "include/header.php" ;

$skillStarTitle = "<h2>Comment lire les <img src='style/img/star.png' class='star'> ?</h2>";
$skillStarsDesc = "Il s'agit du niveau de compétence.
<ul>
    <li>
        <span class='skill-container'>
            <img src='style/img/star.png' class='star'>
            <span style='margin-left: 1em;'>= Niveau débutant,</span>
        </span>
    </li>
    <li>
        <span class='skill-container'>
            <img src='style/img/star.png' class='star'>
            <img src='style/img/star.png' class='star'>
            <span style='margin-left: 1em;'>= Niveau intermédiaire,</span>
        </span>
    </li>
    <li>
        <span class='skill-container'>
            <img src='style/img/star.png' class='star'>
            <img src='style/img/star.png' class='star'>
            <img src='style/img/star.png' class='star'>
            <span style='margin-left: 1em;'>= Niveau confirmé.</span>
        </span>
    </li>
</ul>";
?>

<main>

<article>
    <h1 id="presentation"><span class="hashtag">#</span> Qui suis-je ?</h1>
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
            <img src="style/img/selfie.jpg" alt=""> 
            <p class="label">C'est moi !</p>
        </div>
    </div>
</article>

<article>
    <h1 id="skills"><span class="hashtag">#</span> Mes compétences</h1>
    
    <?php ContentGenerator::GenerateInfobox($skillStarTitle, $skillStarsDesc); ?>
    
    <div id="skills-container">
    </div>
</article>

<article>
    <h1><span class="hashtag">#</span> Mes outils</h1>

    <?php ContentGenerator::GenerateInfobox($skillStarTitle, $skillStarsDesc); ?>

    <div id="tools-container">
    </div>
</article>

</main>