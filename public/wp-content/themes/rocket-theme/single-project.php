<?php
/*
Template Name: Project
*/


$context = Timber::get_context();
$post = Timber::query_post();
$context['post'] = $post;
$context['id'] = 'single-project';

Timber::render('single-project.twig', $context);
