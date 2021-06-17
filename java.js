// var button = document.querySelector("button");
// var isblack = false;

// button.addEventListener("click", function () {
//   if (isblack) {
//     document.body.style.background = "white";
//     // isblack = false;
//   } else {
//     document.body.style.background = "black";
//     // isblack = true;
//   }
//   isblack = !isblack;
// });

// button.addEventListener("click", function () {
//   document.body.classList.toggle("black");
// });

var p1btn = document.querySelector("#p1");
var p2btn = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var resetbtn = document.getElementById("reset");
var numinput = document.querySelector("input");
var p = document.querySelector("p");
var wdisplay = document.querySelector("p span");
var p1sscore = 0;
var p2sscore = 0;
var gameover = false;
var wscore = 5;

p1btn.addEventListener("click", function () {
  if (!gameover) {
    p1sscore++;
    if (p1sscore === wscore) {
      gameover = true;
      p1display.classList.add("winner");
    }
    p1display.textContent = p1sscore;
  }
});

p2btn.addEventListener("click", function () {
  if (!gameover) {
    p2sscore++;
    if (p2sscore === wscore) {
      gameover = true;
      p2display.classList.add("winner");
    }
    p2display.textContent = p2sscore;
  }
});

resetbtn.addEventListener("click", function () {
  reset();
});

function reset() {
  p1sscore = 0;
  p2sscore = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameover = false;
}
numinput.addEventListener("change", function () {
  wdisplay.textContent = this.value;
  wscore = Number(this.value);
  reset();
});
