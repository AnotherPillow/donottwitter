// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-01-26
// @description  try to take over the world!
// @author       You
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // scary magic constant - just html. NEVER TRUST THIS STYLE OF CODE !! ALWAYS DECODE.
    const DATA_DONOTTWITTER = `
    <!DOCTYPE HTML>
    <!--this was done in notepad w no indents we ball-->
    <head>
        <title>DoNotTwitter</title>
        <style>
            body {
            background-color:#000;
            color:#fff;
            }
        </style>
    </head>
    <body>
        <h1>DoNotTwitter has blocked this page from loading.</h1>
        <p><a href="https://www.youtube.com/watch?v=-VfYjPzj1Xw"><b>Elon is a nazi.</b></a>You should probably use <a href="https://bsky.app">BlueSky</a> instead.</p>
    </body>

    `
    document.write(atob(DATA_DONOTTWITTER));
    window.stop();
})();
