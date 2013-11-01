// load.js - load js/css resources only once with javascript calls
// version 0.5

;(function(window, document) {
	
	"use strict";
	
	window.load = function() {
		var sources = {};    // Cache
		var js = function(src) {
			if(src in sources) {
				return;
			}
			document.write("<script type='text/javascript' src='" + src + "'><\/script>");
			sources[src] = true;
		};
		
		
		var css = function(src) {
			if(src in sources) {
				return;
			}
			document.write("<link type='text/css' rel='stylesheet' href='" + src + "' />");
			sources[src] = true;
		};
		
		
		var jquery = function(version) {
			version = version || 1;
			if(!window.jQuery) {
				js('http://ajax.googleapis.com/ajax/libs/jquery/' + version + '/jquery.js');
			}
		};
		
		
		var jqueryUi = function(version) {
			jquery();
			version = version || '1.10.0';
			if(!(window.jQuery && jQuery.ui)) {
				css('http://code.jquery.com/ui/' + version + '/themes/base/jquery-ui.css');
				js('http://code.jquery.com/ui/'  + version + '/jquery-ui.js');
			}
		};
		
		return {
			js       : js,
			css      : css,
			jquery   : jquery,
			jqueryUi : jqueryUi
		};
	};
})(window, document);