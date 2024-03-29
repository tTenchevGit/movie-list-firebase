import { login, createAccount } from './authService.js';

document.addEventListener('DOMContentLoaded', () => {
  // Event listener for login
  const loginButton = document.getElementById('loginButton');
  loginButton.addEventListener('click', function() {
    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    login(email, password)
      .then(userCredential => {
        console.log("Logged in", userCredential.user);
        // clearScreenAndShowMessage("Logged in successfully.");
         logins()
         
      })
      .catch(error => {
        console.error("Error logging in:", error.message);
        if (error.code == "auth/invalid-credential") {
            alert("invalid password");
        }else if(error.code == "auth/invalid-email") {
          alert("Username not exisitng, please create an account");
      }
      });
  });

  // Event listener for create account
  const createAccountButton = document.getElementById('createAccountButton');
  createAccountButton.addEventListener('click', function() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    createAccount(email, password)
      .then(userCredential => {
        console.log("Account created", userCredential.user);
        // clearScreenAndShowMessage("Account sucesfully created!");
        alert("Account has been created. Thank you!");
      })
      .catch(error => {
        console.error("Error creating account:", error.message);
        alert("The email address is invalid");
        // clearScreenAndShowMessage("User exisitng try to log in");
      });
  });
});


function logins() {
  const form = document.getElementById('container1');
  const list = document.getElementById('movieList');
  
   form.style.display = 'none';
   list.style.display = 'block';
}

function clearScreenAndShowMessage(message) {
    document.body.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 24px;">${message}</div>`;
}
