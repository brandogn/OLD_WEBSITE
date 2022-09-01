"use strict";

// theme.css will always be second styleSheet
// theme will always have one rule, which is :root
// with all the theme's color variables
const themeSheet = document.styleSheets.item(1);
const colors = {
	default: `:root {
    --bg-color: #020202;
    --font-color: rgb(255, 247, 223);
  }`,
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

let toggled = false;
function toggleColors() {
	if (toggled) {
		changeColor("default");
	} else {
		changeColor("cobalt");
	}
	document
		.querySelector(".color-selector")
		.classList.toggle("hidden");
	toggled = !toggled;
}

let index = 1;
function setRandomColor() {
	const colorKeys = Object.keys(colors);
	// const color = colorKeys[1 + Math.floor((colorKeys.length - 1) * Math.random())];
	const color =
		colorKeys[1 + (index % (colorKeys.length - 1))];
	console.log(colorKeys, color);
	changeColor(color);
	index++;
}

// ==================== DOM ====================

document
	.querySelectorAll("#color-btn")
	.forEach((x) =>
		x.addEventListener("click", () => toggleColors())
	);
document
	.querySelector(".color-selector")
	.addEventListener("click", setRandomColor);

  toggleColors()
