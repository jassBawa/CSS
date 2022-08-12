let btn = document.getElementById("colorBtn");
let mainDiv = document.getElementById("app");
let text = document.getElementById("colorText");

function changeColor() {
  let color1 = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  let color2 = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  // console.log("clicked", newColor);
  // mainDiv.style.background = newColor;

  mainDiv.style.background =
    "linear-gradient(to right, " + color1 + "," + color2 + ")";

  text.innerText = "linear-gradient(to right, " + color1 + ", " + color2 + ")";

  // return newColor;
}
btn.addEventListener("click", changeColor);
