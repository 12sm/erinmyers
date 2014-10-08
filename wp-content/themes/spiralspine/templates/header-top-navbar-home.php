<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="<?php echo home_url(); ?>/"><img src="../assets/img/logo.png" class="img-responsive"></a>
    </div>

    <nav class="collapse navbar-collapse" role="navigation">
      <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
        endif;
      ?>
    </nav>
  </div>
  <div class="row slider">
  	Slider goes here  
  </div>
  <div class="container-fluid">
    <div class="row email-signup">
    	<div class="col-md-6 col-sm-12">
    		<h2>Help Inform, Inspire, Ignite</h2>
    		<h3>Get news to learn how.</h3>
    	</div>
    	<div class="col-md-6 col-sm-12">
    		Email Signup Here
    	</div>	
    </div>
  </div>  
</header>
