import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./styles.css";

const content = document.getElementById("content");

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

content.append(home());

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(home());
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(menu());
});

aboutBtn.addEventListener("click", () => {
  content.innerHTML = "";
  content.append(about());
});
