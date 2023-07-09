document.getElementById("submitbtn").addEventListener("click", function() {
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
  
    // Replace the following condition with your actual validation logic
    if (email === "example@example.com" && password === "password123") {
      // Redirect to the main page
      window.location.href = "index.html";
    } else {
      // Display error message
      alert("Wrong email or password entered!");
    }
  });