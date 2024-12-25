
let container = document.querySelector(".container");
let signUpBtn = document.getElementById("signUp");
let logInBtn = document.getElementById("logIn");
let signupSubmit = document.getElementById("signupbtn");
let loginSubmit = document.getElementById("loginbtn");


signUpBtn.addEventListener('click', () => {
   container.classList.add("right-panel-active");
});


logInBtn.addEventListener('click', () => {
   container.classList.remove("right-panel-active");
});


signupSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   
   let firstName = document.getElementById("firstName").value.trim();
   let lastName = document.getElementById("lastName").value.trim();
   let email = document.getElementById("email").value.trim();
   let password = document.getElementById("password").value.trim();

   if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields!");
      return;
   }

   if (localStorage.getItem(email)) {
      alert("User already registered!");
      return;
   }

   
   let newUser = { firstName, lastName, email, password };
   localStorage.setItem(email, JSON.stringify(newUser));
   alert("Registration successful!");
   logInBtn.click(); 
});


loginSubmit.addEventListener('click', (e) => {
   e.preventDefault();

   let email = document.getElementById("email_login").value.trim();
   let password = document.getElementById("password_login").value.trim();

   if (!email || !password) {
      alert("Please fill in all fields!");
      return;
   }

   
   let userData = JSON.parse(localStorage.getItem(email));

   if (!userData) {
      alert("User not found. Please sign up first.");
      return;
   }

   if (userData.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", true); 
      localStorage.setItem("currentUser", JSON.stringify(userData)); 
      window.location.href = "converter.html"; 
   } else {
      alert("Invalid email or password.");
   }
});
