The Embedded version lets you create Content Templated and Views for your theme or plugin, without requiring any plugin.

= Instructions =

1. Create the directory called 'embedded-views' in the root folder of your theme or plugin.

2. Copy the entire content of this directory (embedded) to the 'embedded-views' that you just created.

3. Include them from the theme’s functions.php file by adding these statements at the very beginning (right after the php statement):

require_once dirname(__FILE__) . '/embedded-views/views.php';

4. Export your configuration from your development site. Go to the Views->Import/Export menu and click on the 'Export' button. You will receive a ZIP file with the XML and PHP configuration files (both are required).

Unzip that file and place both settings.xml and the setting.php into the embedded-views directory.

You're done!

Also it can be used as a standalone plugin.

= Instructions =

1. Create the directory called 'embedded-views' in the plugins folder of your WordPress installation.

2. Copy the entire content of this directory (embedded) to the 'embedded-views' that you just created.

3. Export your configuration from your development site. Go to the Views->Import/Export menu and click on the 'Export' button. You will receive a ZIP file with the XML and PHP configuration files (both are required).

Unzip that file and place both settings.xml and the setting.php into the embedded-views directory.

You're done!

= Changelog =

v. 1.6.2

  - First release as standalone plugin