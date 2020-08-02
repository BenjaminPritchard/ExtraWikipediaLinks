// ==UserScript==
// @name         ExtraWikipediaLinks
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Add a link to en.wikipedia articles, linking to relevant YouTube videos, Kiddle encyclopedia articles, and anything else you want
// @author       Benjamin Pritchard
// @match        https://en.wikipedia.org/*
// @grant        none
// @GitHub       https://github.com/BenjaminPritchard/ExtraWikipediaLinks
// ==/UserScript==

(function() {
    'use strict';

    // grab the name of the wiki article we are on
    var x = document.getElementById("firstHeading");
    var article = x.innerText;

    // there is a "donate" button on the page, which has an ID of "n-sitesupport"
    // find that element, and add our links right below it
    var ul = document.getElementById("n-sitesupport").parentElement;


    var li1 = document.createElement("li");
    li1.innerHTML = '<a  target="_blank" href="https://www.youtube.com/results?search_query=' + article + '">Videos</a>';
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = '<a target="_blank" href="https://kids.kiddle.co/' + article + '">Kiddle</a>';
    ul.appendChild(li2);

    // add any other links you would like here...

})();

