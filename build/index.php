<?php
    require 'class/Slim/Slim.php';
    \Slim\Slim::registerAutoloader();

    $app = new \Slim\Slim([
    	'templates.path' => 'views'
    ]);

    // Hooks
    $app->setBaseUrl('/');

    // Get request object
    $req = $app->request;

    $app->get('/', function() use ($app) {
    	$app->render('home.php', compact('app'));
    })->name('home');

    $app->get('/about', function() use ($app) {
        $app->render('about.php', compact('app'));
    })->name('about');

    // Otherwise
    $app->notFound(function () use ($app) {
    	$app->render('home.php', compact('app'));
    });

    // Run babe ! Run !
    $app->run();
?>
