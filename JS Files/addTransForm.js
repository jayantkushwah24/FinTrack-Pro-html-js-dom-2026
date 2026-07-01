import { getKeyOfUserTrans, getTransactionHistory } from "./script.js";

export const addTransForm = document.querySelector("#add-trans-form");
export const addTransactionType = document.querySelector("#add-trans-type");
const addTransBack = document.querySelector("#add-trans-back");
export const addTransDesc = document.querySelector("#add-trans-desc");
export const addTransAmount = document.querySelector("#add-trans-amount");
export const addTransDate = document.querySelector("#add-trans-date");
export const addTransCategory = document.querySelector("#add-trans-category");

addTransForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let key = getKeyOfUserTrans();
  let transactionHistory = getTransactionHistory();
  let id = addTransForm.dataset.editId;

  if (id) {
    let idx = transactionHistory.findIndex((t) => t.id == id);
    if (idx !== -1) {
      transactionHistory[idx] = {
        id: id,
        type: addTransactionType.value,
        description: addTransDesc.value,
        amount: addTransAmount.value,
        date: addTransDate.value,
        category: addTransCategory.value,
      };
    }
    delete addTransForm.dataset.editId;
  } else {
    let obj = {
      id: crypto.randomUUID(),
      type: addTransactionType.value,
      description: addTransDesc.value,
      amount: addTransAmount.value,
      date: addTransDate.value,
      category: addTransCategory.value,
    };

    transactionHistory.push(obj);
  }

  localStorage.setItem(key, JSON.stringify(transactionHistory));
  addTransForm.reset();
  window.location.reload();
});

addTransBack.addEventListener("click", () => {
  addTransForm.style.display = "none";
});
