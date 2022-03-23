<?php include "include/header.php" ?>

<form method="post">
    <label for="theme-selector">Choisissez votre thème:</label>
    <select name="theme-selector" id="theme-selector">
        <option value="auto">Automatique (par défaut)</option>
        <option value="light">Clair</option>
        <option value="dark">Sombre</option>
    </select>
    <button type="button" id="apply-theme">Appliquer</button>
</form>