const colorSelector = document.querySelector(".color-selector");
const colors = document.querySelector(".dropdown-content");
const colorIcons = document.querySelectorAll(".icon.color");

const toggleColorDropDown = () => {
    colors.classList.toggle("show")
    colors.classList.toggle("hidden")
};


colorSelector.addEventListener("click", toggleColorDropDown);

for (let i = 0; i < colorIcons.length; i++) {
    const elem = colorIcons[i];
    elem.addEventListener("click", () => { alert("Colors coming soon !"); })
}
