<?php
/*echo */
if($_SERVER['REQUEST_URI'] == '/shop') {
	header('Location: /my-products');
};
/**
 * Шаблон шапки (header.php)
 * @package WordPress
 * @subpackage your-clean-template
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); // вывод атрибутов языка ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); // кодировка ?>">
	<?php /* RSS и всякое */ ?>
	<link rel="alternate" type="application/rdf+xml" title="RDF mapping" href="<?php bloginfo('rdf_url'); ?>">
	<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php bloginfo('rss_url'); ?>">
	<link rel="alternate" type="application/rss+xml" title="Comments RSS" href="<?php bloginfo('comments_rss2_url'); ?>">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); // абсолютный путь до темы ?>/style.css">
	<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); // абсолютный путь до темы ?>/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="http://sources.sites.org.ua/mobilemenu/mobilemenu-black.css">
	<link rel="stylesheet" type="text/css" href="/fa/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Raleway:600,800,300,400' rel='stylesheet' type='text/css'>
	 <!--[if lt IE 9]> 
	 <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	 <![endif]-->
	<title><?php typical_title(); // выводи тайтл, функция лежит в function.php ?></title>
	<?php wp_head(); // необходимо для работы плагинов и функционала ?>
</head>
<body <?php body_class(); // все классы для body ?>>
	<header>
		<div class="toptop">
			<div class="llogo">
				<a href="/"><img src="/img/logo-top.png"></a>
			</div>
			<center class="mainmenu">
			<?php $args = array( // опции для вывода верхнего меню, чтобы они работали, меню должно быть создано в админке
				'theme_location' => 'top', // идентификатор меню, определен в register_nav_menus() в function.php
				'container'=> 'nav', // обертка списка
				'menu_class' => 'bottom-menu', // класс для ul
				'menu_id' => 'bottom-nav', // id для ul
				);
				wp_nav_menu($args); // выводим верхнее меню
			?>
			</center>
		</div>
		<?php if( is_front_page() ) { ?>
			<div class="myslider">
				<img src="/img/bg1.jpg">
				<img src="/img/bg2.jpg">
				<img src="/img/bg3.jpg">
				<img src="/img/bg4.jpg">
				<img src="/img/bg5.jpg">
				<img src="/img/bg6.jpg">
				<img src="/img/bg7.jpg">
			</div>
		<?php }  ?>
		<?php if( is_product_category() ) { ?>
			<div class="categorybg">
			</div>
		<?php }?>
		<?php //add_product_to_cart2('253'); ?>
		<script>//jQuery('.woocommerce > form').submit();</script>
	</header>