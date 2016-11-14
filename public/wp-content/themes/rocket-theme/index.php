<?php

$context = Timber::get_context();
$context['posts'] = Timber::get_posts();
$context['id'] = 'index';
Timber::render('twig/index.twig', $context);
