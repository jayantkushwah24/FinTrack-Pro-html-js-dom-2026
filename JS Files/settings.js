import { getCurrency, getUsername } from "./script.js";

const profileUsername = document.querySelector("#profile-username");
const profileCurrency = document.querySelector("#profile-currency");
const profileDetailsForm = document.querySelector("#profile-details-form");

profileUsername.value = getUsername();
profileCurrency.value = getCurrency();

profileDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = profileUsername.value;
  let currency = profileCurrency.value;

  let obj = {
    username,
    currency,
  };

  localStorage.setItem("user", JSON.stringify(obj));
});
