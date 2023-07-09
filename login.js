document.getElementById("submit-button").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Replace the following condition with your actual validation logic
    if (email === "example@example.com" && password === "password123") {
      // Redirect to the main page
      window.location.href = "index.html";
    } else {
      // Display error message
      alert("Wrong email or password entered!");
    }
  });
  