const darkThemeBtn = document.querySelector("#dark-theme-btn");
const resetAllDataBtn = document.querySelector("#reset-all-btn");
const body = document.querySelector("body");
let username4 = JSON.parse(localStorage.getItem("user")).username;
let key4 = "transaction_" + username4;

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
    localStorage.removeItem(key4);
    window.location.reload();
  }
});
