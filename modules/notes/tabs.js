const tasksactive = document.querySelector(".menu__tasks");
const catalogactive = document.querySelector(".menu__catalog");
tasksactive.classList.add("active");
tasksactive.addEventListener("click", function () {
   tasksactive.classList.add("active");
   catalogactive.classList.remove("active");
   const menu = document.querySelector(".main__right");
   menu.classList.remove("dfalse");
   tasksactive.classList.add("active");
   const menucat = document.querySelector(".main__rcatalog");
   menucat.classList.add("dfalse");
   window.location.reload();
})


catalogactive.addEventListener("click", function () {
   catalogactive.classList.add("active");
   tasksactive.classList.remove("active");
   const menu = document.querySelector(".main__right");
   menu.classList.add("dfalse");
   const menucat = document.querySelector(".main__rcatalog");
   menucat.classList.remove("dfalse");

})