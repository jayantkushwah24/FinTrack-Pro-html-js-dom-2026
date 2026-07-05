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
    allTransTableBody.innerHTML += `
      <tr>
          <td>${transaction.date}</td>
          <td>${transaction.description}</td>
          <td>${transaction.category}</td>
          <td>
              <span class="currency-symbol">${getCurrency()}</span>${transaction.amount}
          </td>
          <td class="action-buttons">
              <button class="edit-btn all-trans-edit-btn" data-id="${transaction.id}">
                  <span class="material-symbols-outlined">edit</span>
              </button>

              <button class="delete-btn all-trans-delete-btn" data-id="${transaction.id}">
                  <span class="material-symbols-outlined">delete</span>
              </button>
          </td>
      </tr>
      `;
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
  const btn = event.target.closest("button");
  if (!btn) return;

  const id = btn.dataset.id;

  if (btn.classList.contains("all-trans-edit-btn")) {
    editTransaction(id);
  }

  if (btn.classList.contains("all-trans-delete-btn")) {
    deleteTransaction(id);
  }
});
