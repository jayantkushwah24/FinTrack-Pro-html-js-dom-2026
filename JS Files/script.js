export function getKeyOfUserTrans() {
  let key = "transaction_" + getUsername();
  return key;
}
export function getUsername() {
  let username = JSON.parse(localStorage.getItem("user")).username;
  return username;
}

export function getCurrency() {
  let currency = JSON.parse(localStorage.getItem("user")).currency;
  return currency;
}

export function getTransactionHistory() {
  let key = getKeyOfUserTrans();
  let transactionHistory = JSON.parse(localStorage.getItem(key)) || [];
  return transactionHistory;
}

export function getTotalIncome() {
  const history = getTransactionHistory();
  let totalIncome = 0;

  history.forEach((trans) => {
    if (trans.type === "income") {
      totalIncome += Number(trans.amount);
    }
  });

  return totalIncome;
}

export function getTotalExpense() {
  const history = getTransactionHistory();
  let totalExpense = 0;

  history.forEach((trans) => {
    if (trans.type === "expense") {
      totalExpense += Number(trans.amount);
    }
  });

  return totalExpense;
}

