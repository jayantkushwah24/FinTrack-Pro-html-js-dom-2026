const topbarUsernameDiv = document.querySelector("#topbar-username");
const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "login.html";
});

topbarUsernameDiv.textContent = JSON.parse(
  localStorage.getItem("user"),
).username;
