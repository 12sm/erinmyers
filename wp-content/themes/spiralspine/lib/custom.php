<?php 

define( 'UPLOADS', ''.'assets' );

// add extra css to WP Admin
add_action('admin_head', 'admin_css');

function admin_css() {
  echo '<style>
    .wrap .error {display:none;}
    .vc_license-activation-notice {display:none;}
  </style>';
}

?>