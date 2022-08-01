"use strict";

// theme.css will always be second styleSheet
// theme will always have one rule, which is :root
// with all the theme's color variables
const themeSheet = document.styleSheets.item(1);
const colors = {
  blue: colorWay("#0b415a", "#dbb845"),
  purp: colorWay("#342550", "#ff8b8b"),
  red: colorWay("#442121", "#f5db4b"),
  orange: colorWay("#30281d", "#a3ddb9"),
  green: colorWay("#20311c", "#ca7e27"),
  cream: colorWay("#292b2b", "#f0e2a2"),
};

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

// ==================== DEBUG: ====================

// Test Color Ways:
const test = colorWay("#282828", "#ff0000");
const test2 = colorWay("#43224a", "#ff002f");

changeColor(test2);

console.log(themeSheet.cssRules);
