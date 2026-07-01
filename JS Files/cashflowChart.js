import { getTotalExpense, getTotalIncome } from "./script.js";

const ctx = document.querySelector("#cashflow-chart");

let totalIncome = getTotalIncome();
let totalExpense = getTotalExpense();

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Income",
        data: [totalIncome],
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: [totalExpense],
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
