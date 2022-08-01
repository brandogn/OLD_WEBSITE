"use strict";

// theme.css will always be second styleSheet
// theme will always have one rule, which is :root
// with all the theme's color variables
const themeSheet = document.styleSheets.item(1);

function colorWay(bg, font) {
  return `:root {
        --bg-color: ${bg};
        --font-color: ${font};
    }`;
}

function changeColor(rule) {
  themeSheet.deleteRule(0);
  themeSheet.insertRule(rule, 0);
}

// Color Ways:
const test = colorWay("#282828", "#ff0000");
const test2 = colorWay("#43224a", "#ff002f");

changeColor(test2);

// ==================== DEBUG LOGS: ====================

console.log(themeSheet.cssRules);
