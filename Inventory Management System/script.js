document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    
    if (username === "admin" && password === "password") {
     
      window.location.href = "./searchbar/index.html";
    } else {
      alert("Invalid username or password!");
    }
  });