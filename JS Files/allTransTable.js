import {
  addTransactionType,
  addTransAmount,
  addTransCategory,
  addTransDate,
  addTransDesc,
  addTransForm,
} from "./addTransForm.js";
import {
  getCurrency,
  getKeyOfUserTrans,
  getTransactionHistory,
} from "./script.js";

const allTransTypeFilter = document.querySelector("#all-trans-type-filter");
const allTransSearch = document.querySelector("#all-trans-search");
const allTransTableBody = document.querySelector("#all-trans-table-body");
let transactionHistory = getTransactionHistory();

function tableUI() {
  allTransTableBody.innerHTML = "";
  transactionHistory.forEach((transaction) => {
    allTransTableBody.innerHTML += `<tr>
                <th>${transaction.date}</th>
                <th>${transaction.description}</th>
                <th>${transaction.category}</th>
                <th><span class="currency-symbol">${getCurrency()}</span>${transaction.amount}</th>
                <th>
                    <span data-id="${transaction.id}" class="all-trans-edit-btn">✎</span>
                    <span data-id="${transaction.id}" class="all-trans-delete-btn">🗑</span>
                </th>
              </tr>`;
  });
}
tableUI();

function editTransaction(id) {
  let editTrans = transactionHistory.find((t) => t.id == id);

  addTransForm.style.display = "inline";
  addTransactionType.value = editTrans.type;
  addTransDesc.value = editTrans.description;
  addTransAmount.value = editTrans.amount;
  addTransDate.value = editTrans.date;
  addTransCategory.value = editTrans.category;

  addTransForm.dataset.editId = id;
}

function deleteTransaction(id) {
  let confirmDelete = confirm(
    "Are you sure you want to delete this transaction?",
  );
  if (!confirmDelete) return;

  let transactionHistory = getTransactionHistory();
  transactionHistory = transactionHistory.filter((t) => t.id != id) || [];
  let key = getKeyOfUserTrans();
  localStorage.setItem(key, JSON.stringify(transactionHistory));
  window.location.reload();
}

allTransSearch.addEventListener("input", (event) => {
  let typedValue = event.target.value.toLowerCase().trim();
  let copyTransHistory = getTransactionHistory();

  if (typedValue === "") {
    transactionHistory = copyTransHistory;
  } else {
    transactionHistory = copyTransHistory.filter((t) =>
      t.description.toLowerCase().includes(typedValue),
    );
  }
  tableUI();
});

allTransTypeFilter.addEventListener("change", (event) => {
  let selectedValue = event.target.value;

  if (selectedValue === "all") {
    transactionHistory = getTransactionHistory();
  } else {
    transactionHistory = transactionHistory.filter(
      (t) => t.type === selectedValue,
    );
  }
  tableUI();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const id = target.getAttribute("data-id");

  if (target.classList.contains("all-trans-edit-btn")) {
    editTransaction(id);
  }

  if (target.classList.contains("all-trans-delete-btn")) {
    deleteTransaction(id);
  }
});
