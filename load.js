// load.js - load js/css resources only once with javascript calls
// version 0.2

;(function(window) {
	
	"use strict";
	
	var loader = {
		sources : {},
		load_js : function(src) {
			if(src in loader.sources) {
				return;
			}
			document.write("<script type='text/javascript' src='" + src + "'><\/script>");
			loader.sources[src] = true;
		},
		
		
		load_css :function(src) {
			if(src in loader.sources) {
				return;
			}
			document.write("<link type='text/css' rel='stylesheet' href='" + src + "' />");
			loader.sources[src] = true;
		},
		
		
		load_jquery : function(version) {
			version = version || 1;
			if(!window.jQuery) {
				loader.load_js('http://ajax.googleapis.com/ajax/libs/jquery/' + version + '/jquery.js');
			}
		},
		
		
		load_jquery_ui : function(version) {
			loader.load_jquery();
			version = version || '1.10.0';
			if(!(window.jQuery && jQuery.ui)) {
				loader.load_css('http://code.jquery.com/ui/' + version + '/themes/base/jquery-ui.css');
				loader.load_js('http://code.jquery.com/ui/'  + version + '/jquery-ui.js');
			}
		}
	};
	
	
	/* For maintaining backward compability */
	window.load_js        = loader.load_js;
	window.load_css       = loader.load_css;
	window.load_jquery    = loader.load_jquery;
	window.load_jquery_ui = loader.load_jquery_ui;
})(window);
