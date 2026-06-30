const ctx = document.querySelector("#cashflow-chart");
let username3 = JSON.parse(localStorage.getItem("user")).username;
let currency3 = JSON.parse(localStorage.getItem("user")).currency;
let key3 = "transaction_" + username3;
let transactionHistory3 = JSON.parse(localStorage.getItem(key3)) || [];

let totalIncome3 = 0;
let totalExpense3 = 0;

transactionHistory3.forEach((trans) => {
  if (trans.type == "income") {
    totalIncome3 += Number(trans.amount);
  } else {
    totalExpense3 += Number(trans.amount);
  }
});

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Income",
        data: [totalIncome3],
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: [totalExpense3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
