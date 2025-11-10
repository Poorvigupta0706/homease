document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const location = document.getElementById("location").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const username = document.getElementById("username").value.trim();
  const photoInput = document.getElementById("photo");

  // Read photo as base64
  const reader = new FileReader();
  reader.onload = async function () {
    const photo = reader.result;

    const newHelper = { name, location, skills, photo, username };

    try {
      // Send data to the backend
      const response = await fetch('http://localhost:5000/api/househelps/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHelper),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        document.getElementById("registerForm").reset();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server.');
    }
  };

  if (photoInput.files.length > 0) {
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    alert('Please upload a photo.');
  }
});