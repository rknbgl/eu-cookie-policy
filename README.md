# eu-cookie-policy
Simple Javascript plugin for creating a cookie agreement panel

<h2>EU Accept Cookies Policy</h2>
According to the EU rules valid from September 2015, every website from EU must contains agreement for using a cookies files.
This simple plugin to your website made this rule done.

<h2>Installing</h2>
Copy the content of src/css and src/js folder to Your static files storage ( etc. "static/*", "assets/*" ).
In HTML HEAD tag link thees files to Your html code:<br />
<code>
	&lt;script src=&quot;/YOUR_PATH/js/eu_accept_cookies.js&quot;&gt;&lt;/script&gt;\r\n
	&lt;link rel=&quot;stylesheet&quot; href=&quot;/YOUR_PATH/css/eu_accept_cookies.css&quot; /&gt;\r\n
</code>

<h2>Usage</h2>
Copy this code to Your html code, before closing "BODY" tag. This javascript function need one parameter and that is a language of Your website<br />
<code>
	&lt;script type=&quot;text/javascript&quot;&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;eu_accept_cookies.panel();<br />
	&lt;/script&gt;\n<br />
</code>
<br />
All done...

<h2>Internationalization</h2>
Initializing with predefined messages. Currenty supported are: sk-SK, en-EN, de-DE, fr-FR<br />
<code>
	&lt;script type=&quot;text/javascript&quot;&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;eu_accept_cookies.panel(&quot;sk&quot;);<br />
	&lt;/script&gt;\n<br />
</code>
<br /><br />
If you need create a new language messages or customizing the messages of current language, you only need call a method "localize(langCode, Hash messages)" <strong>before</strong> calling a method "panel()" like on the example bellow<br /><br />
<code>
	&lt;script type=&quot;text/javascript&quot;&gt;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;eu_accept_cookies.localize(&quot;de-DE&quot;, {<br >
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCEPT_TEXT: &quot;This website use cookies. Using this website, You agree with saving a cookies to Your computer.&quot;,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACCEPT_BUTTON_TEXT: &quot;Accept&quot;,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MORE_INFO_TEXT: &quot;More info&quot;,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MORE_INFO_HREF: &quot;/info/cookies.html&quot;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;});<br />
	&nbsp;&nbsp;&nbsp;&nbsp;eu_accept_cookies.panel();<br />
	&lt;/script&gt;\n<br />
</code>
