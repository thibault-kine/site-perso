<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thibault Kine</title>

    <!-- === SCRIPTS === -->
    <script src="scripts/themeManager.js"></script>
    <script src="scripts/skillsAndToolsgenerator.js"></script>

    <!-- === STYLESHEETS === -->
    <link rel="stylesheet" href="style/style.css">
    
</head>
<body>

<header>
    <form method="post" id="theme-select-form">
        <label for="theme-selector">Thème:</label>
        <select name="theme-selector" id="theme-selector">
            <option value="auto">Automatique (par défaut)</option>
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
        </select>
        <button type="button" id="apply-theme">Appliquer</button>
    </form>

    <span id="title"><a href="index.php">Thibault <br> Kine</a></span>

    <div id="header-links">
        <a href="">Portfolio</a>
        <a href="">CV</a>
        <a href="">Contact</a>
    </div>
</header>