![VistaPanel JS Modifier](logo_vsjs.png)

# VistaPanel JS Modifier

Customize your **MyOwnFreeHost VistaPanel** with JavaScript. Replace the control panel logo, hide interface elements, adjust menu items, update SSL notices, and load custom stylesheets without editing VistaPanel's source code.

## Features

- Replace the VistaPanel logo with an image of your choice.
- Hide the sidebar or individual control panel menu items.
- Customize menu item links, descriptions, and search keywords.
- Change the displayed PHP version on the Account Settings page.
- Customize the SSL configuration notice.
- Load external CSS stylesheets.
- Retrieve the page option, VistaPanel username, logo URL, and panel version.

## Installation

1. Sign in to your **MyOwnFreeHost** account.
2. Open **Your Adverts** → **Control Panel Advert Control**.
3. Select the domain you want to customize.
4. Paste the code below into the appropriate advert code field and save.

```html
<script src="https://cdn.jsdelivr.net/gh/RegenerateApps/mofh-vp-js-modifier@main/vistascripts.js"></script>
<script>
  // Add your customizations here.
  HideSidebar();
</script>
```

> **Important:** Load `vistascripts.js` before calling its functions. The examples assume VistaPanel's target elements and, where applicable, `PAGE.appGroups` are already initialized.

## Examples

### Replace the VistaPanel logo

```html
<script>
  SetVpLogoImage("https://example.com/assets/logo.png");
</script>
```

Replace the example URL with a publicly accessible image URL.

### Hide the sidebar

```html
<script>
  HideSidebar();
</script>
```

The sidebar is hidden immediately, without an animation.

### Hide a menu item

```html
<script>
  HideElementDetails("sitereptile", PAGE.appGroups);
</script>
```

Replace `sitereptile` with the appropriate feature identifier.

### Customize an existing menu item

```html
<script>
  const accountUrl = "https://app.example.com/u/view_account/" +
    encodeURIComponent(GetVpUsername());

  SetElementDetails("sitereptile", accountUrl, "url", PAGE.appGroups);
  SetElementDetails("sitereptile", "Advanced Account Settings", "itemdesc", PAGE.appGroups);
  SetElementDetails("sitereptile", "website", "searchtext", PAGE.appGroups);
</script>
```

Replace the example URL with your own. Supported properties: `url`, `itemdesc`, and `searchtext`.

### Change the displayed PHP version

```html
<script>
  SetPhpVersion("PHP 8.2");
</script>
```

**Note:** This changes displayed text on the Account Settings page only. It does not change the server's PHP version.

### Customize the SSL information notice

```html
<script>
  SetSslPageText("Manage your SSL configuration here.");
</script>
```

On the SSL configuration page, this also changes the alert appearance from warning to informational.

### Load a custom stylesheet

```html
<script>
  LoadStylesheet("https://example.com/assets/vistapanel.css");
</script>
```

The function avoids adding a duplicate stylesheet link.

### Read VistaPanel information

```html
<script>
  console.log("Page:", GetPageInfo());
  console.log("Username:", GetVpUsername());
  console.log("Logo URL:", GetVpLogoImage());

  GetVpVersion()
    .then(version => console.log("VistaPanel version:", version))
    .catch(error => console.error("Version lookup failed:", error));
</script>
```

The version request is asynchronous and may be affected by network or cross-origin restrictions.

## API reference

| Function | Description |
| --- | --- |
| `GetPageInfo()` | Returns the current `option` URL parameter. |
| `GetVpUsername()` | Returns the username displayed in VistaPanel. |
| `GetVpLogoImage()` | Returns the current logo URL. |
| `SetVpLogoImage(url)` | Changes the logo image. |
| `HideSidebar()` | Hides the sidebar immediately. |
| `HideElementDetails(feature, groups)` | Hides matching menu elements. |
| `SetElementDetails(feature, value, property, groups)` | Updates a menu item's supported property. |
| `SetPhpVersion(version)` | Updates the displayed PHP version on Account Settings. |
| `SetSslPageText(text)` | Updates the notice on the SSL configuration page. |
| `GetVpVersion()` | Returns a Promise with the panel version response. |
| `LoadStylesheet(url)` | Adds an external stylesheet unless already loaded. |

## Compatibility

This script uses modern browser features, including `fetch`, optional chaining, and nullish coalescing. It also depends on VistaPanel's current HTML structure and menu data, which may change after panel updates.

### Can I use it with Wybe Network's VistaPanel Customizations?

Yes. However, the scripts may conflict if both modify the same functionality, such as menu items. In that case, choose one script for the affected feature.

## Troubleshooting

- **A function is not defined:** Ensure the main library script loads before your customizations.
- **Menu changes do not apply:** Confirm the feature identifier and verify that `PAGE.appGroups` is available when your code runs.
- **Logo or text changes do not apply:** Confirm the target element exists on the current VistaPanel page.
- **A stylesheet does not load:** Check its URL, browser console, and any content security restrictions.
- **The version request fails:** Check the browser network console for connectivity or cross-origin errors.

## Credits

Originally developed by [SpookyKipper](https://github.com/SpookyKipper) and [Deveroonie](https://github.com/Deveroonie).

Maintained at [RegenerateApps/mofh-vp-js-modifier](https://github.com/RegenerateApps/mofh-vp-js-modifier).

## License

See [LICENSE](LICENSE) for licensing information.
