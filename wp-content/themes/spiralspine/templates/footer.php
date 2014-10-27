<div class="bottom-email-signup">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-6">
        <h2>Inform, Inspire, Ignite</h2>
        <h3>Get news to learn how.</h3>
      </div>
      <div class="col-md-6 col-sm-6">
        <div id="mc_embed_signup">
          <form action="//spiralspine.us9.list-manage.com/subscribe/post?u=d73eb5a9058233250acd4b164&amp;id=41c0f87e4f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <div class="row">
                <div class="col-md-4">
                  <input type="text" value="" name="FNAME" class="required" id="mce-FNAME" placeholder="First Name">
                </div>
                <div class="col-md-4">
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="E-Mail">
                </div>
                <div class="col-md-4">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="submit-button">
                </div>
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;">
                <input type="text" name="b_d73eb5a9058233250acd4b164_41c0f87e4f" tabindex="-1" value="">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<footer class="content-info" role="contentinfo">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row sidebar-footer">
          <?php dynamic_sidebar( 'sidebar-footer'); ?>
        </div>
        <div class="row footer-nav">
          <?php if (has_nav_menu( 'footer_navigation')) : wp_nav_menu(array( 'theme_location'=>'footer_navigation', 'menu_class' => '')); endif; ?>
        </div>
        <div id="social" class="row social-nav">
          <?php if (has_nav_menu( 'social_navigation')) : wp_nav_menu(array( 'theme_location'=>'social_navigation', 'menu_class' => '')); endif; ?>
          <p class="credits">&copy;
            <?php echo date( 'Y'); ?>
            <?php bloginfo( 'name'); ?>| <a href="http://12southmusic.com/" target="_blank">built by 12SM</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5435ef4703125ec0" async></script>

<!-- Begin 12SM Network Analytics <!-->
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-27814560-1']);
  _gaq.push(['_setDomainName', '12southmusic.com']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End 12SM Network Analytics <!-->

<script>
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-27814560-45', 'auto');
  ga('send', 'pageview');
</script>
