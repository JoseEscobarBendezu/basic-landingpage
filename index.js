let navbar = document.getElementById("navBar");
let navBarWrapper = document.getElementById("navBarWrapper");
const menuIconWrapper = document.getElementById("menuIconWrapper");

let aux = 0;

document.onclick = element => {
  if ( element.target.id !== "menuIconWrapper" && element.target.id !== "navBar") {
    navbar.classList.remove("showMe");
    menuIconWrapper.classList.remove("active");
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > aux) {
    navBarWrapper.classList.add("ocultar");
    navbar.classList.remove("showMe");
    menuIconWrapper.classList.remove("active");
  } else
    navBarWrapper.classList.remove("ocultar");

  aux = window.scrollY;
});

menuIconWrapper.onclick = () => toggleEfect();

document.querySelectorAll(".linkSelect").forEach( element => element.setAttribute("onclick", "toggleEfect()"));

function toggleEfect() {
  navbar.classList.toggle("showMe");
  menuIconWrapper.classList.toggle("active");
}
