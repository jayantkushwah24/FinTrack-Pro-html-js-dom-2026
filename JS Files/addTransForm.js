const addTransForm = document.querySelector("#add-trans-form");
const addTransBack = document.querySelector("#add-trans-back");
const addTransactionType = document.querySelector("#add-trans-type");
const addTransDesc = document.querySelector("#add-trans-desc");
const addTransAmount = document.querySelector("#add-trans-amount");
const addTransDate = document.querySelector("#add-trans-date");
const addTransCategory = document.querySelector("#add-trans-category");

let username = JSON.parse(localStorage.getItem("user")).username;
let key = "transaction_" + username;
let transactionHistory = [];

addTransForm.addEventListener("submit", (event) => {
  event.preventDefault();

  transactionHistory = JSON.parse(localStorage.getItem(key)) || [];

  let obj = {
    id: crypto.randomUUID(),
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
