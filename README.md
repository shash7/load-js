load.js
=======

This is a dynamic javascript and css loader that is used from javascript.

It uses the document.write() technique to immediately load js and css resources.

Examples
--------

    <script type='text/javascript' src='http://pages.github.com/rkitover/load-js/load.js'></script>

    <script type='text/javascript>
        // all your load calls should be in their own <script> block

        load_css('http://foo.com/some.css')

        load_js('/js/some.js')

        // will not be loaded twice!
        load_js('/js/some.js')

        load_jquery() // latest 1.x, only if window['jQuery'] is unset

        load_jquery('1.8.6') // specific version

        load_jquery_ui() // 1.9.2 by default, only if jQuery.ui is unset

        load_jquery_ui('1.9.2') // specific version
    </script>

    <script type='text/javascript'>
        // stuff loaded in preceding <script> block immediately usable from the next!

        $('<div>').append('Yay!').dialog({ modal: true })
    </script>
