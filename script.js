// Author Emily Reger 2023

"use strict";

// Dark mode button
function darkMode() {
    var element = document.body;
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
    document.querySelector("#darkmode").classList.add("hide");
    document.querySelector("#lightmode").classList.remove("hide");
    document.querySelector(".light_logo").classList.add("hide");
    document.querySelector(".dark_logo").classList.remove("hide");
 }

// Light mode button
function lightMode() {
    var element = document.body;
    element.classList.add("light-mode");
    element.classList.remove("dark-mode");
    document.querySelector("#lightmode").classList.add("hide");
    document.querySelector("#darkmode").classList.remove("hide");
    document.querySelector(".dark_logo").classList.add("hide");
    document.querySelector(".light_logo").classList.remove("hide");
 }


 //event listeners

//toggle dark mode
document.getElementById("darkmode").addEventListener("click", darkMode);
document.getElementById("lightmode").addEventListener("click", lightMode);