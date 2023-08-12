const adminmenu = document.querySelector(".admin__list");
const header = document.querySelector(".container");
const menu1 = document.createElement("div");
const menucontainer = document.createElement('div');
const logOut = document.createElement('div');
const myprofile = document.createElement('div');

menu1.className = "menu";
logOut.className = "logout";
myprofile.classList = "myprofile";
menucontainer.className = "adminmenu";

menucontainer.append(logOut);
menucontainer.append(myprofile);
menu1.append(menucontainer);
header.append(menu1);
menu1.classList.add("dfalse");
logOut.textContent = "Log out";
myprofile.textContent = "My profile";


adminmenu.addEventListener('click', function () {
   menu1.classList.toggle("dfalse");
   menu1.classList.toggle("dtrue");
})


//logout

logOut.addEventListener('click', function () {
   window.location.href = "../pages/login.html";
})


myprofile.addEventListener('click', function () {
   window.location.href = "../pages/signup.html";

   // const logname = document.querySelector("#login");
   // const curuser = localStorage.getItem('currentuser');
   // logname.textContent = String(curuser);
   // console.log(curuser);
})