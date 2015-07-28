# eu-cookie-policy
Simple Javascript plugin for creating a cookie agreement panel

## EU Accept Cookies Policy
According to the EU rules valid from September 2015, every website from EU must contains agreement for using a cookies files.
This simple plugin to your website made this rule done.

## Installing
Copy the content of "src/css" and "src/js" folder to your static files storage ( f.e. "static/*", "assets/*", etc. ).
In HTML <head> tag link these files to the HTML code:<br />
```
	<script src="/YOUR_PATH/js/eu_accept_cookies.js"></script>
	<link rel="stylesheet" href="/YOUR_PATH/css/eu_accept_cookies.css" />
```

## Usage
Copy this code to Your html code, before closing <body> tag.<br />
```
	<script type="text/javascript">
		eu_accept_cookies.panel();
	</script>
```
<br />
All done...

## Internationalization
Initializing with predefined messages. Currenty supported are: sk-SK, en-EN<br />
```
	<script type="text/javascript">
		eu_accept_cookies.panel("sk-SK");
	</script>
```
<br /><br />
If you need create a new language messages or customizing the messages of current language, you only need call a method "localize(langCode, Hash messages)" <strong>before</strong> calling a method "panel()" like on the example bellow<br /><br />
```
	<script type="text/javascript">
		eu_accept_cookies.localize("de-DE", {
			ACCEPT_TEXT: "Diese Seite verwendet für seine Funktionalität Cookies. Durch die Nutzung der Website Sie, um ihre Speicherweisen",
			ACCEPT_BUTTON_TEXT: "Ich akzeptiere"
			MORE_INFO_TEXT: "Mehr Informationen"
			MORE_INFO_HREF:"/info/cookies.html"
		});
		eu_accept_cookies.panel();
	</script>
```
## Styling
All graphic styles You can made via the src/css/eu_accept_cookies.css file
