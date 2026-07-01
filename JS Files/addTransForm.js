import { getKeyOfUserTrans, getTransactionHistory } from "./script.js";

const addTransForm = document.querySelector("#add-trans-form");
const addTransBack = document.querySelector("#add-trans-back");
const addTransactionType = document.querySelector("#add-trans-type");
const addTransDesc = document.querySelector("#add-trans-desc");
const addTransAmount = document.querySelector("#add-trans-amount");
const addTransDate = document.querySelector("#add-trans-date");
const addTransCategory = document.querySelector("#add-trans-category");

addTransForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let key = getKeyOfUserTrans();
  let transactionHistory = getTransactionHistory();

  let obj = {
    id: transactionHistory.length + 1,
    type: addTransactionType.value,
    description: addTransDesc.value,
    amount: addTransAmount.value,
    date: addTransDate.value,
    category: addTransCategory.value,
  };

  transactionHistory.push(obj);
  localStorage.setItem(key, JSON.stringify(transactionHistory));
  addTransForm.reset();
});

addTransBack.addEventListener("click", () => {
  addTransForm.style.display = "none";
});
