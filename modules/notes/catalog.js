const catalog = document.querySelector(".menu__catalog");
const catImp = document.querySelector(".rcatalog__important");
const catPro = document.querySelector('.rcatalog__process');
const catDone = document.querySelector(".rcatalog__done");


tasks.forEach(function (t) {
   const task = document.createElement("div");
   const tasktext = document.createElement("div");
   const taskdata = document.createElement('div');
   const btndelete = document.createElement("div");
   const btnedit = document.createElement("div");
   const btns = document.createElement("div");

   task.setAttribute("draggable", "true");
   task.className = "taskcontainer";
   task.setAttribute("id", t.id);
   tasktext.classList = "cattext";
   taskdata.classList = "catdata";
   btndelete.classList = "catdel";
   btnedit.classList = "catedit";
   btns.classList = "catbtn";

   btndelete.textContent = "Delete";
   btnedit.textContent = "Edit";

   btndelete.setAttribute("data-action", "delete");
   btnedit.setAttribute("data-action", "edit");
   tasktext.innerHTML = t.txt;
   taskdata.innerHTML = t.data;

   btns.append(btndelete);
   btns.append(btnedit);

   task.append(tasktext);
   task.append(taskdata);
   task.append(btns);

   const id = Number(task.id);

   const index = tasks.findIndex((task) => {
      return task.id === id;
   })
   if (tasks[index].status == "important" && tasks[index].process == "nodone") {
      catImp.append(task);
   }
   if (tasks[index].status == "usual" && tasks[index].process == "nodone") {
      catPro.append(task);
   }
   if (tasks[index].process == "done") {
      catDone.append(task);
   }

   btndelete.addEventListener('click', function (event) {
      if (event.target.dataset.action === "delete") {
         const parenNode = event.target.closest('.taskcontainer');
         const id = Number(parenNode.id);
         const index = tasks.findIndex((task) => {
            return task.id === id;
         })
         tasks.splice(index, 1);
         parenNode.remove();
         saveToLS();
      }


   });

   const catedit = document.getElementsByClassName("catedit");
   for (i = 0; i < catedit.length; i++) {
      catedit[i].addEventListener("click", catEditTask, false);
   }
   function catEditTask(e) {
      if (e.target.dataset.action === "edit") {
         const parNode = e.target.closest('.taskcontainer');
         const id = Number(parNode.id);
         const index = tasks.findIndex((task) => {
            return task.id === id;
         })

         const catcontaineredit = document.createElement("div");
         const catnewtask = document.createElement("input");
         const catttext = document.querySelector(".cattext");
         const catnewdate = document.createElement('input');
         const catddate = document.querySelector(".catdata");
         const catbuttonseditmenu = document.createElement('div');


         const catexit = document.createElement("button");
         const catsave = document.createElement('button');

         const catedit = document.querySelector('.catedit');

         catcontaineredit.classList = "editmenu";
         catbuttonseditmenu.classList = "buttons";
         catexit.classList = "edExit";
         catsave.classList = "edSave";

         catnewdate.type = "date";
         catnewtask.type = "text";

         catnewdate.value = tasks[index].data;
         catnewtask.value = tasks[index].txt;

         catexit.textContent = "Exit";
         catsave.textContent = "Save";


         catcontaineredit.append(catnewtask);
         catcontaineredit.append(catnewdate);
         catbuttonseditmenu.append(catexit);
         catbuttonseditmenu.append(catsave);
         catcontaineredit.append(catbuttonseditmenu);
         catedit.append(catcontaineredit);

         catexit.addEventListener("click", function () {
            catnewtask.value = catnewtask.value;
            catnewdate.value = catnewdate.value;
            catcontaineredit.style.display = "none";
         })

         //save button when edit button is pressed
         catsave.addEventListener("click", function () {
            catttext.textContent = catnewtask.value;
            catddate.textContent = catnewdate.value;
            tasks[index].txt = catnewtask.value;
            tasks[index].data = catnewdate.value;
            saveToLS();
            window.location.reload();
            
         })
      }
   }
})
