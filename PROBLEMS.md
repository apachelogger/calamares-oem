- calamares gets uninstalled after installation but we need it for oem-config-firstboot
- calamares should force oem as user
- what happens on errors?
- undo currently drops sddm.conf autologin, it should edit oem out and disable relogin
- module in cala to delete a user?
- we could technically run everything as root by letting sddm autologin into root, but that seems somewhat meh for marginal gain (notably cleanup of the oem user is simpler, but then we also need to cleanup the root user, so whatevs)
- calamares-settings overrides bin/calamares so theming is lovely, this needs handling in some form with multiple config sets
- scripting ... loadTemplate defaultpanel .. then access panels().foreach ( .widgets().foreach { print entry.type }) = crash
- kwin rules seem to not work at all on calamares
