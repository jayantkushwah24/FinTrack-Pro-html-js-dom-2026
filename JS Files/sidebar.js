const addTransactionBtn = document.querySelector("#add-trans-btn");
const addTransactionForm = document.querySelector("#add-trans-form");
const navItemsDashboard = document.querySelector("#nav-items-dashboard");
const navItemsSettings = document.querySelector("#nav-items-settings");
const mainPageContent = document.querySelector("#main-page-content");
const settingsCard = document.querySelector("#settings-card");

addTransactionBtn.addEventListener("click", () => {
  addTransactionForm.style.display = "inline";
});

navItemsDashboard.addEventListener("click", () => {
  mainPageContent.style.display = "inline";
  settingsCard.style.display = "none";
});

navItemsSettings.addEventListener("click", () => {
  mainPageContent.style.display = "none";
  settingsCard.style.display = "inline";
});
