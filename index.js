var playMode = "hard";
var colors = [];
var numColor;
var correctColor;
var colorDisplay = document.getElementById("colorDisplay");
var arrSquare = document.querySelectorAll(".square");

var modeBtn = document.querySelectorAll('.modeBtn');
var newColorBtn = document.querySelector("#newColorBtn");

var message = document.querySelector("#message");
var header = document.querySelector(".header");

var backgroundColor = "#272f3a";
var headerColor = "#f42e38";

// generate a random color, ex: RGB(231, 144, 5);
function randomColor() {
  var resultColor = "rgb";
  var r = Math.floor((Math.random() * 255));
  var g = Math.floor((Math.random() * 255));
  var b = Math.floor((Math.random() * 255));
  resultColor += "(" + r + ", " + g + ", " + b + ")";
  return resultColor;
}

// generate an array random color with num length
function generateRandomColor(num) {
  var arrColor = [];
  for (var i = 0; i < num; i++) {
    arrColor.push(randomColor());
  }
  return arrColor;
}

// change all color when win
function changeAllColor(color) {
  for (var i = 0; i < numColor; i++) {
    arrSquare[i].style.background = color;
  }
  header.style.background = color;
}

function setupModeButtons() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', function () {
      modeBtn[0].classList.remove('selected');
      modeBtn[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numColor = 3 : numColor = 6;
      playGame();
    })
  }
}

function resetGame() {
  // set square invisiable
  for (var i = 0; i < arrSquare.length; i++) {
    arrSquare[i].style.background = backgroundColor;
  };
  header.style.background = headerColor;
  message.textContent = "";
}

function playGame() {
  resetGame();

  newColorBtn.addEventListener("click", function () {
    playGame();
  })
  setupModeButtons();
  // generate new array color
  colors = generateRandomColor(numColor);
  correctColor = colors[Math.floor(Math.random() * (- 1))];
  colorDisplay.textContent = correctColor;

  for (var i = 0; i < numColor; i++) {
    arrSquare[i].style.background = colors[i];
    arrSquare[i].addEventListener("click", function () {
      if (this.style.background == correctColor) {
        message.textContent = "Correct"
        changeAllColor(correctColor);
      } else {
        message.textContent = "Wrong, baby"
        this.style.background = backgroundColor;
      }
    });
  }
}

playGame();


