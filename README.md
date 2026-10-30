![vistascripts.js](logo_vsjs.png)

---

``vistascripts.js`` offers new ways to customize your VistaPanel. 

## How to install
Login to your MyOwnFreeHost account & click "Your Adverts", and then "Control Panel Advert Control", select your domain and copy & paste the code below: 

### Load the initial code
```js
<script src="https://cdn.jsdelivr.net/gh/GenApplications/vistascripts.js/vistascripts.js"></script>
```
### Example code for changing logo to remote URL
```js
<script>SetVpLogoImage("https://github.com/GenApplications/GenerateArea/raw/dev/assets/default/img/garea_outline.png");</script>
```
Make sure to replace the URL inside the code with your own, and don't forget to include the initial code first!

### Example code for hiding sidebar
```js
<script>HideSidebar();</script>
```
### Example code for removing element
```js
<script>HideElementDetails('sitereptile', PAGE.appGroups);</script>
```
### Example code for changing element
```js
<script>
SetElementDetails('sitereptile', 'https://app.example.com/u/view_account/'+username, 'url', PAGE.appGroups);
SetElementDetails('sitereptile', 'Advanced Account Settings', 'itemdesc', PAGE.appGroups);
SetElementDetails('sitereptile', 'website', 'searchtext', PAGE.appGroups);
</script>
```
Make sure to replace the URL in the first line with your own.

### Can I use vistascripts.js and Wybe Network's VistaPanel Customizations at the same time?
Yes, you can! Some conflicts can occur when covering the same functionality (for example, Wybe's Element Changer with vistascripts.js' element changing), in which case you're free to decide which script to utilize.
