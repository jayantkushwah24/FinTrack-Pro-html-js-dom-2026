const registerForm = document.querySelector("#register-form");
const registerUsername = document.querySelector("#register-username");
const registerPassword = document.querySelector("#register-password");

let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
localStorage.setItem("isLoggedIn", "false");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let usernameValue = registerUsername.value.trim();
  let passwordValue = registerPassword.value.trim();

  if (usernameValue === "" || passwordValue === "") {
    alert("Please enter valid username and password");
    return;
  }

  let userAlreadyExist = registeredUsers.some(
    (user) => user.username === usernameValue,
  );

  if (userAlreadyExist) {
    alert("User already exists");
    return;
  }

  let obj = {
    username: usernameValue,
    password: passwordValue,
  };

  registeredUsers.push(obj);
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  registerForm.reset();
  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
});
