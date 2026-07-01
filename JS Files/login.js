import { getRegisteredUser } from "./script.js";

const loginForm = document.querySelector("#login-form");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");

let registeredUsers = getRegisteredUser();
localStorage.setItem("isLoggedIn", "false");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let usernameValue = loginUsername.value.trim();
  let passwordValue = loginPassword.value.trim();

  if (usernameValue === "" || passwordValue === "") {
    alert("Please enter valid username and password");
    return;
  }

  let userExist = registeredUsers.find(
    (user) => user.username === usernameValue,
  );

  if (userExist) {
    if (userExist.password === passwordValue) {
      window.location.href = "index.html";
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("theme", "light");
      localStorage.setItem(
        "user",
        JSON.stringify({ username: usernameValue, currency: "$" }),
      );
    } else {
      alert("Please enter correct password");
      return;
    }
  } else {
    alert("Please register. Username do not exist.");
    return;
  }
});
