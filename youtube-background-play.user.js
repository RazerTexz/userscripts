// ==UserScript==
// @name YouTube Background Play
// @namespace https://github.com/RazerTexz
// @version 1.0.0
// @description Keeps playing in background and with screen off.
// @author RazerTexz
// @license MIT
// @match *://*.youtube.com/watch*
// @match *://*.youtube.com/shorts/*
// @run-at document-start
// @grant none
// ==/UserScript==

"use strict";

Object.defineProperty(Document.prototype, "visibilityState", {
    get: () => "visible"
});
