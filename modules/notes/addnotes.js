const crAdd = document.querySelector("#addnote");
const Data = document.querySelector("#h_data");
const Text = document.querySelector("#h_crNote");

const notelist = document.querySelector(".notes__list");
const checkedbox = document.querySelector('#checkedbox');
const btncheck = document.querySelector("#checkedbox");


//button checked
btncheck.addEventListener("click", function () {
   if (document.getElementById('checkedbox').checked) {
      alert("Important");

   } else {
      alert("Not important");
   }
})


//create array for tasks
let tasks = [];
if (localStorage.getItem("tasks")) {
   tasks = JSON.parse(localStorage.getItem("tasks"));
}


//to show all elements from array (localStorage)
tasks.forEach(function (task) {

   const listElem = document.createElement("div");
   listElem.classList.add("list__elem");
   listElem.id = task.id;

   const circle = document.createElement("div");
   circle.classList.add("circle");

   const taskText = document.createElement("div");
   taskText.classList.add("tasktext");
   taskText.dataset.action = "done";
   taskText.textContent = task.txt;

   const taskData = document.createElement("div");
   taskData.classList.add("taskdata");
   taskData.textContent = task.data;

   const editButton = document.createElement("button");
   editButton.classList.add("buttonedit");
   editButton.dataset.action = "edit";
   editButton.textContent = "Edit";

   const deleteButton = document.createElement("button");
   deleteButton.classList.add("buttondelete");
   deleteButton.dataset.action = "delete";
   deleteButton.textContent = "Delete";

   const id = Number(listElem.id);

   const index = tasks.findIndex((task) => {
      return task.id === id;
   })


   if (String(tasks[index].status) == "important") {
      circle.classList.add("red");

   }
   else {
      circle.classList.add("orange");
   }

   if (tasks[index].process == "done") {
      taskText.classList.add('line');
      taskData.classList.add('line');
      circle.classList.add("green");
   }



   listElem.appendChild(circle);
   listElem.appendChild(taskText);
   listElem.appendChild(taskData);
   listElem.appendChild(editButton);
   listElem.appendChild(deleteButton);

   notelist.append(listElem);
})



//add element to noteslist(taskslist)
crAdd.addEventListener("click", function () {

   const crData = document.querySelector("#h_data").value;
   const crText = document.getElementById("h_crNote").value;
   const newtaskinfo = {
      id: Date.now(),
      txt: crText,
      data: crData,
      status: checkedfunc(),
      process: "nodone",
   }

   function checkedfunc() {
      if (document.getElementById('checkedbox').checked) {
         return "important";
      }
      else {
         return "usual";
      }
   }
   tasks.push(newtaskinfo);

   setTimeout(function () {

      if (crData == "" && crText == "") {
         alert("Заполните все поля");
      }
      if (crData != "" && crText != "") {
         const list__elem = document.createElement("div");
         const circle = document.createElement("div");
         const tasktext = document.createElement("div");
         const taskdata = document.createElement("div");
         const btnedit = document.createElement("button");
         const btndelete = document.createElement("button");


         tasktext.className = "tasktext";
         taskdata.className = "taskdata";
         btndelete.className = 'buttondelete';
         circle.className = "circle";
         btnedit.className = 'buttonedit';
         list__elem.className = "list__elem";



         tasktext.innerHTML = newtaskinfo.txt;
         taskdata.innerHTML = crData;
         btnedit.innerHTML = "Edit";
         btndelete.innerHTML = "Delete";

         tasktext.setAttribute("data-action", "done");
         taskdata.setAttribute("data-action", "done");
         list__elem.setAttribute('id', newtaskinfo.id);
         btnedit.setAttribute("data-action", "edit");
         btndelete.setAttribute("data-action", "delete");

         notelist.append(list__elem);
         list__elem.append(circle);
         list__elem.append(tasktext);
         list__elem.append(taskdata);
         list__elem.append(btnedit);
         list__elem.append(btndelete);


         btndelete.addEventListener('click', deleteTask);
         btnedit.addEventListener('click', editTask);

         if (String(newtaskinfo.status) == "important") {
            circle.classList.add("red");
         }
         else {
            circle.classList.add("orange");
         }
      }
      setTimeout(function () {
         Data.value = '';
         Text.value = '';
         checkedbox.checked = false;

      }, 0)
   }, 0)
   if (crText != '' && crData != '') {
      saveToLS();
   }

   window.location.reload();
})




const del = document.getElementsByClassName("buttondelete");
for (i = 0; i < del.length; i++) {
   del[i].addEventListener("click", deleteTask, false);
}


function deleteTask(event) {
   if (event.target.dataset.action === "delete") {
      const parenNode = event.target.closest('.list__elem');
      const id = Number(parenNode.id);
      const index = tasks.findIndex((task) => {
         return task.id === id;
      })
      tasks.splice(index, 1);
      parenNode.remove();
      saveToLS();
   }
   window.location.reload();
}

const edit = document.getElementsByClassName("buttonedit");
for (i = 0; i < edit.length; i++) {
   edit[i].addEventListener("click", editTask, false);
}
function editTask(e) {
   if (e.target.dataset.action === "edit") {
      const parNode = e.target.closest('.list__elem');
      const id = Number(parNode.id);
      const index = tasks.findIndex((task) => {
         return task.id === id;
      })

      const containeredit = document.createElement("div");
      const newtask = document.createElement("input");
      const ttext = document.querySelector(".tasktext");
      const newdate = document.createElement('input');
      const ddate = document.querySelector(".taskdata");
      const buttonseditmenu = document.createElement('div');


      const exit = document.createElement("button");
      const save = document.createElement('button');

      const edit = document.querySelector('.editing');


      containeredit.classList = "editmenu";
      buttonseditmenu.classList = "buttons";
      exit.classList = "edExit";
      save.classList = "edSave";

      newdate.type = "date";
      newtask.type = "text";

      newdate.value = tasks[index].data;
      newtask.value = tasks[index].txt;




      exit.textContent = "Exit";
      save.textContent = "Save";


      containeredit.append(newtask);
      containeredit.append(newdate);
      buttonseditmenu.append(exit);
      buttonseditmenu.append(save);
      containeredit.append(buttonseditmenu);
      edit.append(containeredit);


      //exit button when edit button is pressed
      exit.addEventListener("click", function () {
         newtask.value = newtask.value;
         newdate.value = newdate.value;
         containeredit.style.display = "none";
      })

      //save button when edit button is pressed
      save.addEventListener("click", function () {
         ttext.textContent = newtask.value;
         ddate.textContent = newdate.value;
         tasks[index].txt = newtask.value;
         tasks[index].data = newdate.value;
         saveToLS();
         window.location.reload();
      })

   }


   saveToLS();
}




//function search (searches for some taks if not, all blocks will be hidden)
const tasksearch = document.querySelector('#inpsearch');
tasksearch.addEventListener("input", search);

function search() {
   const searchVal = tasksearch.value.toLowerCase();
   for (let i = 0; i < notelist.children.length; i++) {
      const listItem = tasks[i].txt.toLowerCase();
      if (listItem.includes(searchVal)) {
         notelist.children[i].style.display = "flex";
      } else {
         notelist.children[i].style.display = "none";
      }
   }
}




//checking if the checkbox is checked or not


const list = document.getElementsByClassName("list__elem");
for (i = 0; i < list.length; i++) {
   list[i].addEventListener("click", chImportance);

}


function chImportance(e) {
   if (e.target.dataset.action != "edit" && e.target.dataset.action != "delete") {

      const prnt = e.target.closest(".list__elem");
      const id = Number(prnt.id);

      const index = tasks.findIndex((task) => {
         return task.id === id;
      })
      const txt = document.querySelectorAll(".tasktext");
      const txtIndex = txt[index];
      const data = document.querySelectorAll(".taskdata");
      const dataIndex = data[index];
      const circle = document.querySelectorAll(".circle");
      const circleIndex = circle[index];

      if (tasks[index].process == "done") {
         tasks[index].process = "nodone";
      }
      else {
         tasks[index].process = "done";
      }

      txtIndex.classList.toggle("line");
      dataIndex.classList.toggle("line");
      circleIndex.classList.toggle("green");
      saveToLS();
      window.location.reload();
   }
}

//save to localStorage
function saveToLS() {
   localStorage.setItem("tasks", JSON.stringify(tasks));
}

