let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

if (!isLoggedIn) {
  window.location.href = "login.html";
}