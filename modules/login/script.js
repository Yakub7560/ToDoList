const username = document.querySelector("#profilename");
const userpass = document.querySelector("#profilepass");
const signin = document.querySelector("#signin");

signin.addEventListener("click", function () {


   //проверка логина и пароля пользователя
   const nameval = username.value;
   const userpassval = userpass.value;
   let users = JSON.parse(localStorage.getItem("users"));
   localStorage.setItem("adminname", "admin");
   localStorage.setItem("adminpass", "admin");

   let logname = nameval;
   let logpass = users[logname];
   localStorage.setItem("currentuser", nameval); //local storage current user
   if (logpass === userpassval) {
      alert(`Welcome, ${logname}!`);
      window.location.href = "../pages/notes.html";
   }
   else if (nameval === "admin" && userpassval === "admin") {
      alert("Welcome admin");
      window.location.href = "../pages/notes.html";
      return false;
   }


   else if (logpass != userpassval) {
      alert("Wrong password or login, please try again");
   }
})


