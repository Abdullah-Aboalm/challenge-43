// menu landing page
let menuOpen = document.querySelector(".menuOpen");
let menu = document.querySelector(".mobileMenu");
let arrowDown = document.querySelector(".arrow-down");
let overlay = document.querySelector("#overlay");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("active");
  if (menuOpen.classList.contains("active")) {
    menu.style.bottom = "-380%";
    menuOpen.style.opacity = ".7";
    overlay.style.display = "block";
  } else {
    menuOpen.style.opacity = "1";
    menu.style.bottom = "380%";
    overlay.style.display = "none";
  }
});

overlay.addEventListener("click", () => {
  menuOpen.classList.remove("active");
  overlay.style.display = "none";
  if (menuOpen.classList.contains("active")) {
    menu.style.bottom = "-380%";
    menuOpen.style.opacity = ".7";
    overlay.style.display = "block";
  } else {
    menuOpen.style.opacity = "1";
    menu.style.bottom = "380%";
    overlay.style.display = "none";
  }
});

arrowDown.addEventListener("click", () => {
  window.scrollTo({
    top: 800,
    left: 0,
    behavior: "smooth",
  });
});
