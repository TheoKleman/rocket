<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- TITLE -->
        <title>Monkey - Demo</title>

        <meta name="description" content="Description du site" />

        <!-- FAVICON -->
        <!-- <link rel="icon" href="<?php echo $app->baseUrl() ?>img/favicon.png" type="image/png"> -->

        <!-- CSS -->
        <link href="<?php echo $app->baseUrl() ?>css/main.css" rel="stylesheet">
    </head>
    <body>
        <div class="l-container"> <!-- do not delete this node -->
            <div class="c-loader">
                <div class="c-loader__content">
                    <h1>
                        Monkey
                    </h1>
                    <span>
                        Another ES6 starter made to do good shit.
                    </span>
                </div>
            </div>

            <header class="c-header">
                <ul>
                    <li><a href="<?php echo $app->urlFor('home'); ?>">Home</a></li>
                    <li><a href="<?php echo $app->urlFor('about'); ?>">About</a></li>
                </ul>
            </header>

            <div class="application-container"> <!-- do not delete this node -->
                <!-- view -->
                <div class="page-content"> <!-- do not delete this node -->
