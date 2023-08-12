const importantlist = document.querySelector(".rcatalog__important");
const process = document.querySelector(".rcatalog__process");
const lists = document.getElementsByClassName('list');
const done = document.querySelector('.rcatalog__done');

for (l of lists) {
   l.addEventListener("dragstart", function (e) {
      const active = document.querySelector('.menu__catalog');

      let selected = e.target;
      const idx = selected.id;
      const indexx = tasks.findIndex((taskx) => {
         return taskx.id == idx;
      })
      importantlist.addEventListener("dragover", function (e) {
         e.preventDefault();
      });
      importantlist.addEventListener("drop", function (e) {
         importantlist.appendChild(selected);

         if (tasks[indexx].process == "done") {
            tasks[indexx].process = "nodone";
            tasks[indexx].status = "important";
         }
         if (tasks[indexx].process == "nodone") {
            tasks[indexx].status = "important";
         }
         selected = null;
         saveToLS();
         active.classList.add('.active');
      })
      process.addEventListener("dragover", function (e) {
         e.preventDefault();
      });
      process.addEventListener("drop", function (e) {
         process.appendChild(selected);
         if (tasks[indexx].process == "done") {
            tasks[indexx].process = "nodone";
            tasks[indexx].status = "usual";
         }
         if (tasks[indexx].process == "nodone") {
            tasks[indexx].status = "usual";
         }
         selected = null;
         saveToLS();
         active.classList.add('.active');
         // window.location.reload();
      })
      done.addEventListener("dragover", function (e) {
         e.preventDefault();
      });
      done.addEventListener("drop", function (e) {
         done.appendChild(selected);
         if (tasks[indexx].process == "nodone") {
            tasks[indexx].process = "done";
         }
         selected = null;
         saveToLS();
         active.classList.add('.active');
      })
   });
}


