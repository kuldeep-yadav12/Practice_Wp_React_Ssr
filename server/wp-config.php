<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'practice_wp_react_ssr' );

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
define( 'AUTH_KEY',         '<H3nSN*MhL/=]8[1}zY]x|IK7w9[v}Dt`I0FKk;|i5x7{gN<e:}c4k:usOKpLzmr' );
define( 'SECURE_AUTH_KEY',  'FQ_mH+4LEO}.RW9cu<Q-0`z6Lf>|&RfYIkyA6@Nh4bV}Vys(QYY)EB!&j;^`g=;&' );
define( 'LOGGED_IN_KEY',    'H.c_PL|[SC$ffZ3,e9+J4P9Z<we&%m=Nb5:yU1Ykn0BdG5)1sfGZpsuYdt41 8Yl' );
define( 'NONCE_KEY',        'q,h*4l:]+!yG3,!-YA=d#%wMxvL)pTvl~i{IKgrFDV>@#Z#%j^jB4+CYyrmTBLOH' );
define( 'AUTH_SALT',        'L{0:w:_5_H4paLE@`#M16~H8vp?<)=2|v84>&5Z5W#g@9i:Ns<E/,,MmuBqnFf+Y' );
define( 'SECURE_AUTH_SALT', 'yPbZ{5GC=:1Z{sVF*EEXMm4}(99#$2GfLYc&J+$CDAM`Hr6&QrkZ-6RQ~r>{Kem-' );
define( 'LOGGED_IN_SALT',   'WHJ[xhJy]D^P;]Lb5r:l/dr(-JrtHog}CdU9AP*biZ5nS3j3UA}B;h8GZ2?<VG~A' );
define( 'NONCE_SALT',       'JOI?y?]+&D(&h]_THT)z]~]X^u0?AOcgA{!fBB!a(_<v}&,|aGFv4tJCp|!Z~Bzv' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
