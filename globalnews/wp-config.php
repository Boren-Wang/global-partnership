<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'iaps');

/** MySQL database username */
define('DB_USER', 'iaps');

/** MySQL database password */
define('DB_PASSWORD', 'G103@l;');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
//define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
//define('DB_COLLATE', '');

define('WP_HOME', 'https://globalpartners.iaps.stonybrook.edu/globalnews');
define('WP_SITEURL', 'https://globalpartners.iaps.stonybrook.edu/globalnews');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'k8M4JO-&eZ23=>czClOfxNN Dxvkf-T.X:Wy.U -%%4D@UB_%aJ1H8C+X/N,4Zl<');
define('SECURE_AUTH_KEY',  '+AqM(5+-~zW ZNsz@~B}?WVn[TkZ8!adWq8r*%+I:=p[@kCuE).!Ag|b1J=y)+=7');
define('LOGGED_IN_KEY',    'z]h|<;E]]cdiY+-0XJKI{Nc8._a)g/Hl)gq(?}:FB-ir+1(.n+V={r|N+AeOhbbs');
define('NONCE_KEY',        '>{<<Ag~!BC+P9{LY-&]8=.SRz)zagf-c]}m,>j||7V)oXx}eJQ+-<+E#v0/mg[?b');
define('AUTH_SALT',        'oqYJ]]zz<l1UVM-:dFa,Rcy-6=~hnS0t+&#&42,WgI%tI|_y/eJ0~0K/ea0|#?*4');
define('SECURE_AUTH_SALT', ':Qa)M4)k^aD{1BuXI(+x,)#c7yN4+ShKx5.--,hGb?EGXq}ztb I,-J;=[u-v_T?');
define('LOGGED_IN_SALT',   '*DAsElW+k(>@8:eRS,Ics).=.1ziO<-9b$E#w6.2+q-Avl+MAPSFvZ-?ZDdGQoi*');
define('NONCE_SALT',       'Ph4DvwACbYrZ>?u>mTd~3~/|j-l>2@o9c IHkQ831vrqR7[prF*/ VY8qqEK#d-U');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/** FTP credentials */
define( 'FTP_USER', 'iaps' );
define( 'FTP_PASS', 'G103@l;');
define( 'FTP_HOST', 'globalpartners.iaps.stonybrook.edu' );
