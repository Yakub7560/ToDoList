function show() {
   let p = document.getElementById('password');
   p.setAttribute('type', 'text');
   let с = document.getElementById('confirmpass');
   с.setAttribute('type', 'text');
}

function hide() {
   let p = document.getElementById('password');
   p.setAttribute('type', 'password');
   let c = document.getElementById('confirmpass');
   c.setAttribute('type', 'password');
}

let pwShown = 0;

document.getElementById("showpass").addEventListener("click", function () {
   if (pwShown == 0) {
      pwShown = 1;
      show();
   } else {
      pwShown = 0;
      hide();
   }
}, false);