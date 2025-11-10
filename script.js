function login(event) {
  event.preventDefault(); // Stop form from refreshing the page

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check if both fields are filled
  if (username !== "" && password !== "") {
    // ✅ Save login state
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Redirect to homepage
    window.location.href = "index.html";
  } else {
    alert("Please enter both username and password.");
  }
}
