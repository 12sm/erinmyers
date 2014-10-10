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
</header>
  <div class="slider">
  	<?php echo do_shortcode('[rev_slider home-slider]'); ?>
  </div>
  <div class="email-signup">
    <div class="container-fluid">
    <div class="row">
    	<div class="col-md-6 col-sm-6">
    		<h2 style="margin-bottom: 6px;">Help Inform, Inspire, Ignite</h2>
    		<h3 style="margin-top:0px;">Get news to learn how.</h3>
    	</div>
    	<div class="col-md-6 col-sm-6">
    	
<div id="mc_embed_signup">
<form action="//spiralspine.us9.list-manage.com/subscribe/post?u=d73eb5a9058233250acd4b164&amp;id=41c0f87e4f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
  <div id="mc_embed_signup_scroll">
    <div class="row">
		<div class="col-sm-12 col-md-4">
			<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" placeholder="First Name">
		</div>
		<div class="col-sm-12 col-md-4">
			<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="E-Mail">
		</div>
		<div class="col-sm-12 col-md-4">
			<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="submit-button">
		</div>
    </div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_d73eb5a9058233250acd4b164_41c0f87e4f" tabindex="-1" value=""></div>
  </div>
</form>
</div>


    	</div>	
    </div>	
    </div>
  </div>  
