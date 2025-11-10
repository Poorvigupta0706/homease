document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");
  
    // Dummy credentials (you can customize or later connect to real storage)
    const validUsername = "user";
    const validPassword = "1234";
  
    if (username === validUsername && password === validPassword) {
      loginMessage.textContent = "Login successful!";
      loginMessage.style.color = "lightgreen";
    } else {
      loginMessage.textContent = "Invalid credentials. Try again.";
      loginMessage.style.color = "red";
    }
  });
  