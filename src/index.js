import { addAboutContent } from "./about";
import { addHomeContent } from "./home";
import { addMenuContent } from "./menu";

addHomeContent();

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", addHomeContent);
menu.addEventListener("click", addMenuContent);
about.addEventListener("click", addAboutContent);
