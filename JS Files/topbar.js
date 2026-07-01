const topbarUsernameDiv = document.querySelector("#topbar-username");
const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener("click", () => {
  let confirmLogout = confirm(
    "Are you sure you want to log out of your account?",
  );

  if (confirmLogout) {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "login.html";
  }
});

topbarUsernameDiv.textContent = JSON.parse(
  localStorage.getItem("user"),
).username;
