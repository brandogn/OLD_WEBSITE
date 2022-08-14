"use strict";

// theme.css will always be second styleSheet
// theme will always have one rule, which is :root
// with all the theme's color variables
const themeSheet = document.styleSheets.item(1);
const colors = {
  default: `:root {
    --bg-color: #020202;
    --font-color: rgb(255, 247, 223);}`,
  cobalt: colorWay("#0b415a", "#dbb845"),
  purp: colorWay("#342550", "#ff8b8b"),
  maroon: colorWay("#442121", "#f5db4b"),
  orange: colorWay("#30281d", "#a3ddb9"),
  green: colorWay("#20311c", "#ca7e27"),
  cream: colorWay("#292b2b", "#f0e2a2"),
};

function colorWay(bg, font) {
  return `:root {
        font-family: "MS-Font";
        --bg-color: ${bg};
        --font-color: ${font};
    }`;
}

function changeColor(rule) {
  themeSheet.deleteRule(0);
  themeSheet.insertRule(colors[rule], 0);
}

// Special Button
document
  .getElementById("color-btn")
  .addEventListener("click", () => changeColor("cobalt"));

document.getElementById("default-btn").addEventListener("click", () => {
  changeColor("default");
  document.querySelector(".color-selector").classList.toggle("hidden");
});

console.log(document.querySelector(".color-selector").classList);