// load.js - load js/css resources only once with javascript calls
// version 0.1

"use strict"

window.load_js.sources = {}

function load_js(src) {
    if (src in load_js.sources) return

    document.write("<script type='text/javascript' src='" + src + "'><\/script>")

    load_js.sources[src] = true
}
 
function load_css(src) {
    if (src in load_js.sources) return

    document.write("<link type='text/css' rel='stylesheet' href='" + src + "' />")

    load_js.sources[src] = true
}

function load_jquery(ver) {
    if (!ver) ver = 1

    if (!window['jQuery'])
        load_js('http://ajax.googleapis.com/ajax/libs/jquery/' + ver + '/jquery.js')
}

function load_jquery_ui(ver) {
    load_jquery()

    if (!ver) ver = '1.9.2'

    if (! (window['jQuery'] && jQuery.ui)) {
        load_css('http://code.jquery.com/ui/' + ver + '/themes/base/jquery-ui.css')
        load_js('http://code.jquery.com/ui/'  + ver + '/jquery-ui.js')
    }
}
