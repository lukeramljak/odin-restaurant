import { addAboutContent } from "./about";
import { addHomeContent } from "./home";
import { addMenuContent } from "./menu";
import { addContactContent } from "./contact";
import "./output.css";

addHomeContent();

const logo = document.getElementById("logo");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

logo.addEventListener("click", addHomeContent);
home.addEventListener("click", addHomeContent);
menu.addEventListener("click", addMenuContent);
about.addEventListener("click", addAboutContent);
contact.addEventListener("click", addContactContent);
