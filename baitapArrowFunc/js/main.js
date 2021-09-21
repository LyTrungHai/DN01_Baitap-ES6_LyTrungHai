const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let loadColorList = () => {
  let content = " ";
  colorList.map((item, index) => {
    content += `
        <button class="color-button ${item} ${
      index === 0 ? "active" : ""
    }" onclick = "changeColorHouse('${item}')">
        </button>`;
  });
  document.getElementById("colorContainer").innerHTML = content;
};
// Change colors
let changeColorHouse = (item) => {
  let activeColor = document.querySelector(".active");
  activeColor && activeColor.classList.remove("active");
  document.querySelector(`.color-button.${item}`).classList.add("active");
  document.querySelector("#house").className = `house ${item}`;
};
loadColorList();
