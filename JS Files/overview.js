const displayCurrentBalance = document.querySelector(
  "#display-current-balance",
);
const displayTotalIncome = document.querySelector("#display-total-income");
const displayTotalExpense = document.querySelector("#display-total-expense");
const displayTotalTransaction = document.querySelector("#display-total-trans");

let username2 = JSON.parse(localStorage.getItem("user")).username;
let currency2 = JSON.parse(localStorage.getItem("user")).currency;
let key2 = "transaction_" + username2;
let transactionHistory2 = JSON.parse(localStorage.getItem(key2)) || [];

let totalIncome = 0;
let totalExpense = 0;

transactionHistory2.forEach((trans) => {
  if (trans.type == "income") {

    totalIncome += Number(trans.amount);
  } else {
    totalExpense += Number(trans.amount);
  }
});

let currentBalance = totalIncome - totalExpense;

displayCurrentBalance.textContent = currentBalance;
displayTotalIncome.textContent = totalIncome;
displayTotalExpense.textContent = totalExpense;
displayTotalTransaction.textContent = transactionHistory2.length;
