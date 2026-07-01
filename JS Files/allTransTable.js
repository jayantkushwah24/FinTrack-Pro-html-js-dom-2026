import { getKeyOfUserTrans, getTransactionHistory } from "./script.js";

const allTransTableBody = document.querySelector("#all-trans-table-body");

function tableUI() {
  let transactionHistory = getTransactionHistory();
  allTransTableBody.innerHTML = "";

  transactionHistory.map((transaction) => {
    allTransTableBody.innerHTML += `<tr>
                <th>${transaction.date}</th>
                <th>${transaction.description}</th>
                <th>${transaction.category}</th>
                <th>${transaction.amount}</th>
                <th>
                    <span onclick="editTrans(${transaction.id})" class="all-trans-edit-btn">✎</span>
                    <span onclick="deleteTrans(${transaction.id})" class="all-trans-delete-btn">🗑</span>
                </th>
              </tr>`;
  });
}
tableUI();

function editTrans(id) {
  let trans = transactionHistory.find((t) => t.id == id);
  let addTransForm = document.querySelector("#add-trans-form");
  addTransForm.style.display = "inline";
}

function deleteTrans(id) {
  let confirmDelete = confirm(
    "Are you sure you want to delete this transaction?",
  );
  if (!confirmDelete) return;
  
  transactionHistory = transactionHistory.filter((t) => t.id != id) || [];
  let key = getKeyOfUserTrans();
  localStorage.setItem(key, JSON.stringify(transactionHistory));
  tableUI();
}
