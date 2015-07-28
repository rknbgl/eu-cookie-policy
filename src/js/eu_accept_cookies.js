'use strict';

var eu_accept_cookies = {
	langDefault: 'sk-SK',
	langSetted: null,
	langMessages: {
		'sk-SK': {
			'ACCEPT_TEXT': 'Táto stránka využíva pre svoju funkcionalitu súbory cookies. Používaním stránky súhlasite s ich ukladaním',
			'ACCEPT_BUTTON_TEXT': 'Rozumiem',
			'MORE_INFO_TEXT': 'Viac informácií',
			'MORE_INFO_HREF': '/info/cookies.html'
		},
		'en-EN': {
			'ACCEPT_TEXT': 'This website use cookies. Using this website, You agree with saving a cookies to Your computer.',
			'ACCEPT_BUTTON_TEXT': 'Accept',
			'MORE_INFO_TEXT': 'More info',
			'MORE_INFO_HREF': '/info/cookies.html'
		}
	},
	div: null,
	panel: function(lang) {
		if (!this.isEmpy(lang)
				&& typeof lang === "string"
				&& !this.isEmpy(this.langMessages[lang])) {
			this.langSetted = lang;
		} else {
			this.langSetted = this.langDefault;
		}
		
		var myCookie = this.getCookie("eu_accept_cookies");
		if (!myCookie || myCookie == "") {
			this.renderPanel();
		}
		
	},
	renderPanel: function() {
		var doc = document;
		this.div = doc.createElement('div');
		this.div.setAttribute('class', 'eu-accept-cookies-panel');
		this.div.innerHTML = '<p>' + this.langMessages[this.langSetted].ACCEPT_TEXT + '</p>';
		
		var btn = doc.createElement('button');
		btn.innerHTML = this.langMessages[this.langSetted].ACCEPT_BUTTON_TEXT;
		this.div.appendChild(btn);
		
		var ael = doc.createElement('a');
		ael.innerHTML = this.langMessages[this.langSetted].MORE_INFO_TEXT;
		ael.setAttribute('href', this.langMessages[this.langSetted].MORE_INFO_HREF);
		ael.setAttribute('target', '_blank');
		this.div.appendChild(ael);
		
		doc.body.appendChild(this.div); 
		btn.onclick = function() {
			eu_accept_cookies.onAcceptClick();
		};
		
	},
	onAcceptClick: function() {
		this.setCookie("eu_accept_cookies", 1, 365);
		this.div.style.display='none';
	},
	setCookie: function(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	},
	getCookie: function(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return "";
	},
	localize: function(lang, overLoadMessages) {
		//setting a default messages
		this.langMessages[lang] = this.langMessages[this.langDefault];
		//setting a default messages
		for (var key in overLoadMessages) {
			this.langMessages[lang][key] = overLoadMessages[key];
		}
		this.langDefault = lang;
	},
	isEmpy: function(value) {
		return value == null || value == undefined || value == ""
			? true
			: false;
	}
	
};
