<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'rocket');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'mg%:#`S9ZwO,.l(77FmxFB8FyM@K!Z3q(Dgm^7Q5<;]M3uXJyDdVV?pcG*dB`U8e');
define('SECURE_AUTH_KEY',  ')d9_&D]#&^Ac0C4LR$5%okm]4B1S3n)xErvt].S?P/Mrpp3w~$mejR<31D{j.MD]');
define('LOGGED_IN_KEY',    '+2g&Hncva]|L|meb#/wl+Aob+t,[<8]45oj@HLN|{diwLH],{eAJ*|,%}=Hql];`');
define('NONCE_KEY',        ';ruM:,qrv7T4!:nd &]`Xg<XL[ 6={`r9PdLC>%=*TTL`,0ZC-)|)>pL@5v;OpDm');
define('AUTH_SALT',        't`irg~4MxU<J3~5}WH5g^z#W_=Y-J_FsP.RnIuuH%E$tNH(F!5N?%4m%zRtlA.MN');
define('SECURE_AUTH_SALT', 'u@y/u8bj/<IzSb(v,ZLp_yq6KzP 7,od[6Lu+>^pY]&Hb&a{x{14upk-?O%_Q7(p');
define('LOGGED_IN_SALT',   '!qmaHnAk}|N2KOWPI@S+Y9OD][3tg@@xQ2Dhzv2P(J2e4&Bc/@j6IX(&$6NgwwW=');
define('NONCE_SALT',       'jd1)Zif^3wmHL&^v)M^I}sZC#w0;<Y4! z5l2NubwEt@LnZbmY=d@AgLp%m1`)Mb');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'rckt_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d'information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
