const genbutton = document.getElementById("passgenerator");

//generates password and saves them to values
genbutton.addEventListener("click", function () {
   const passinput = document.getElementById("password");
   const passconfirm = document.getElementById("confirmpass");
   const generatedpass = generatePassword();
   passinput.value = generatedpass;
   passconfirm.value = generatedpass;
});



///save button saves login and password
const save = document.getElementById("savebutton");
save.addEventListener("click", function () {
   let username = document.getElementById("login").value;
   let password = document.getElementById("password").value;

   // Получаем текущих пользователей и пароли из localStorage
   let users = JSON.parse(localStorage.getItem("users")) || {};



   if (users.hasOwnProperty(username)) {
      alert("Такое имя пользователя уже существует. Пожалуйста, выберите другое имя.");
   } else {
      // Сохраняем нового пользователя и пароль
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Login and Password Saved")
   }

   
})

let users = JSON.parse(localStorage.getItem("users"));


const signup = document.getElementById("signupbutton");
