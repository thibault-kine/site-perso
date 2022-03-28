<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thibault Kine</title>

    <!-- === INCLUDES === -->
    <?php
    include_once "include/classes/ContentGenerator.php";
    ?>
    
    <!-- === SCRIPTS === -->
    <script src="scripts/themeManager.js"></script>
    <script src="scripts/skillsAndToolsgenerator.js"></script>

    <!-- === STYLESHEETS === -->
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="style/mediaQueries.css">
    
</head>
<body>

<header>
    <div id="burger-menu">
        <img src="style/img/menu.png" style="width: 2.5em;">
        <nav id="burger-links">
            <a href="#me">Présentation</a>
            <a href="#skills">Compétences</a>
            <a href="#tools">Outils</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#cv">CV</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>

    <form id="theme-form">
        <label for="theme-select">Style:</label>
        <select id="theme-select">
            <option value="auto">Auto</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
        <button type="button" id="apply-btn">Apply</button>
    </form>

    <span id="title"><a href="index.php">Thibault <br> Kine</a></span>

    <div id="header-links">
        <a href="#me">Présentation</a>
        <a href="#skills">Compétences</a>
        <a href="#tools">Outils</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#cv">CV</a>
        <a href="#contact">Contact</a>
    </div>
</header>