import { trocarTemasBtn } from "../../scripts/functions.js";
trocarTemasBtn()

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var heroTitle = document.querySelector(".hero-title");
    heroTitle.classList.remove("hidden");
    heroTitle.classList.add("zoom-in");
  }, 500); // 500ms após o carregamento da página           
});

