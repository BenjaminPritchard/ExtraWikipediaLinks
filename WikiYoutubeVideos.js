// ==UserScript==
// @name         WikiYoutubeVideos
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add a link to en.wikipedia articles, linking to relevant YouTube videos
// @author       Benjamin Pritchard
// @match        https://en.wikipedia.org/*
// @grant        none
// @GitHub       https://github.com/BenjaminPritchard/WikiYoutubeVideos
// ==/UserScript==

(function() {
    'use strict';

    // grab the name of the wiki article we are on
    var x = document.getElementById("firstHeading");
    var article = x.innerText;

    // there is a "donate" button on the page, which has an ID of "n-sitesupport"
    // find that element, and add our bottom "Simple" right below it
    var ul = document.getElementById("n-sitesupport").parentElement;
    var li = document.createElement("li");
    li.innerHTML = '<a  target="_blank" href="https://www.youtube.com/results?search_query=' + article + '">Videos</a>';
    ul.appendChild(li);
})();

