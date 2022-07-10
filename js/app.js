const dark = document.querySelector(".sidebar-footer-dark");
const light = document.querySelector(".sidebar-footer-light");
dark.addEventListener("click", () => {
  light.classList.remove("footer-light-active");
  dark.classList.add("footer-dark-active");
  const body = document.body;
  body.classList.add("body-dark");
  const nav = document.querySelector("nav");
  nav.classList.add("nav-dark");
  const aside = document.querySelector("aside");
  aside.classList.add("aside-dark");
  const footerDarkLight = document.querySelector(
    ".sidebar-footer-dark-light-div"
  );
  footerDarkLight.classList.add("sidebar-footer-dark-light-div-dark");
  const main = document.querySelector("main");
  main.classList.add("main-dark");
  const mainLeft = document.querySelectorAll(".main-left>div,.main-right>div");
  mainLeft.forEach((elem) => {
    elem.classList.add("main-content-dark");
  });
  const statsDiv = document.querySelector(".main-overview-statistics");
  statsDiv.classList.add("main-overview-statistics-dark");
  const statsInnerDiv = document.querySelector(
    ".main-overview-statistics-customers-div"
  );
  statsInnerDiv.classList.add("main-overview-statistics-customers-div-dark");
  const customerText = document.querySelector(".main-overview-send-text");
  customerText.classList.add("main-overview-send-text-dark");
  const borderTips = document.querySelectorAll(".main-pro-option-icon");
  borderTips.forEach((elem) => {
    elem.classList.add("main-pro-option-icon-dark");
  });
});
light.addEventListener("click", () => {
  light.classList.add("footer-light-active");
  dark.classList.remove("footer-dark-active");
  const body = document.body;
  body.classList.remove("body-dark");
  const nav = document.querySelector("nav");
  nav.classList.remove("nav-dark");
  const aside = document.querySelector("aside");
  aside.classList.remove("aside-dark");
  const footerDarkLight = document.querySelector(
    ".sidebar-footer-dark-light-div"
  );
  footerDarkLight.classList.remove("sidebar-footer-dark-light-div-dark");
  const main = document.querySelector("main");
  main.classList.remove("main-dark");
  const mainLeft = document.querySelectorAll(".main-left>div,.main-right>div");
  mainLeft.forEach((elem) => {
    elem.classList.remove("main-content-dark");
  });
  const statsDiv = document.querySelector(".main-overview-statistics");
  statsDiv.classList.remove("main-overview-statistics-dark");
  const statsInnerDiv = document.querySelector(
    ".main-overview-statistics-customers-div"
  );
  statsInnerDiv.classList.remove("main-overview-statistics-customers-div-dark");
  const customerText = document.querySelector(".main-overview-send-text");
  customerText.classList.remove("main-overview-send-text-dark");
  const borderTips = document.querySelectorAll(".main-pro-option-icon");
  borderTips.forEach((elem) => {
    elem.classList.remove("main-pro-option-icon-dark");
  });
});

function onClick() {}
