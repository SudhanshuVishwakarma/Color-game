var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function () {
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardbtn.addEventListener("click", function () {
  hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].style.display = "block";
  }
});
resetButton.addEventListener("click", function () {
  // gneerate new colors
  colors = generateRandomColors(numSquares);
  // pick a new color
  pickedColor = pickColor();
  //chnage colors of sq
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  messagedisplay.textContent = "";

  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add quick listerner to sq//

  squares[i].addEventListener("click", function () {
    //grab color to picked sq
    var clickedcolor = this.style.backgroundColor;
    ///compare to picked color
    if (clickedcolor === pickedColor) {
      messagedisplay.textContent = "Correct";
      resetButton.textContent = "Play Again!!";
      changeColors(clickedcolor);
      h1.style.background = clickedcolor;
    } else {
      this.style.backgroundColor = "#232323 ";
      messagedisplay.textContent = "Try Again!!";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    //get that random variable
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);

  var g = Math.floor(Math.random() * 256);

  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
