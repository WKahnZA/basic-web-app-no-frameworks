import "./app.scss";

function main(): void {
  const button = document.querySelector("#testButton");
  button?.addEventListener("click", testSubmitHandler);
}

function testSubmitHandler(e: Event): void {
  e.preventDefault();
  const outputElement = document.querySelector("#output");
  outputElement.textContent = "Scripts work!";
}

function testImageLoader() {
    const image = document.createElement("img")
    image.src = require("../assets/test-image.jpg")
    image.style.width = "200px"

    const imageWrapper = document.getElementById("imageTest")
    imageWrapper.appendChild(image)
}

main();
