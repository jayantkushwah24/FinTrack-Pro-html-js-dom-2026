import {
  getCurrency,
  getTotalExpense,
  getTotalIncome,
  getTransactionHistory,
} from "./script.js";

function renderOverview() {
  const displayCurrentBalance = document.querySelector(
    "#display-current-balance",
  );
  const displayTotalIncome = document.querySelector("#display-total-income");
  const displayTotalExpense = document.querySelector("#display-total-expense");
  const displayTotalTransaction = document.querySelector(
    "#display-total-trans",
  );
  const displayCurrencySpan =
    document.querySelectorAll(".currency-symbol") || [];
  let currency = getCurrency();

  displayCurrencySpan.forEach((c) => (c.textContent = currency));

  if (
    !displayCurrentBalance ||
    !displayTotalIncome ||
    !displayTotalExpense ||
    !displayTotalTransaction
  ) {
    return;
  }

  const totalIncome = getTotalIncome();
  const totalExpense = getTotalExpense();
  const transactionHistory = getTransactionHistory();

  displayCurrentBalance.textContent = (totalIncome - totalExpense).toFixed(2);
  displayTotalIncome.textContent = totalIncome.toFixed(2);
  displayTotalExpense.textContent = totalExpense.toFixed(2);
  displayTotalTransaction.textContent = transactionHistory.length;
}

renderOverview();
