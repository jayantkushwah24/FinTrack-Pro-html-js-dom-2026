import { getKeyOfUserTrans } from "./script.js";

const darkThemeBtn = document.querySelector("#dark-theme-btn");
const resetAllDataBtn = document.querySelector("#reset-all-btn");
const body = document.querySelector("body");

darkThemeBtn.addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  if (theme == "light") {
    localStorage.setItem("theme", "dark");
    body.setAttribute("class", "dark");
  } else {
    localStorage.setItem("theme", "light");
    body.removeAttribute("class");
  }
});

resetAllDataBtn.addEventListener("click", () => {
  const userConfirmed = confirm(
    "WARNING: This will delete all your transaction data permanently!",
  );

  if (userConfirmed) {
    let key = getKeyOfUserTrans();
    localStorage.removeItem(key);
    window.location.reload();
  }
});
