<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Firstrank' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'SfD vnSr_H_r@C>cqXcop/@Ly$Cp%utqC08:D1&pMhhNU`j.x*(D:]`Gn!%SrOQ&' );
define( 'SECURE_AUTH_KEY',  'X6.M2dWeHe.:!xQw&_yQPnys,QLi$6[a)2S_!mn+?3(A?] @lN6QG83z<p>j{*E/' );
define( 'LOGGED_IN_KEY',    'xOJ@#sb.{/0kx?mjP?*ikj.Y8*5PTSR]DDzPd;pC:IO*XPmlOa;?M}wL-2UW+J~,' );
define( 'NONCE_KEY',        '# /h_pF;Vcet[qSf]mQ(9K5-1?t*Q;#GYq,V%;RSKiGDZ;*<sy:02(S$]I7Gycfu' );
define( 'AUTH_SALT',        '1[cYCg0rAS@;:Du6St2C{B@a-747M}M>!=X>1z/<Rg6]7I!$iUH}[V%H{,?EPd`/' );
define( 'SECURE_AUTH_SALT', 'Y7d)AXq*C*-vi:UWTkHsCk3Yr]dbio??e#JNPa!*!ECSH#OpddxZo{WNW%bxRdR<' );
define( 'LOGGED_IN_SALT',   '.LQ;@QB820,`LLj(K/Ln,OPE^g{R1jLP(NPV lf4lv96Y$h^qnd=@XzEQ`C;U/`#' );
define( 'NONCE_SALT',       '+RmaDuX>QDBz|QP)?NSv:oQ]roNyDT StJ!^(cX~oz?o=g;;T]rAXcE-q+oGrUP-' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
