function isCorrect(colorClicked) {
  if (colorClicked == correctColor) {
    return true;
  } else {
    return false;
  }
}

// generate a random color, ex: RGB(231, 144, 5);
function randomColor() {
  var resultColor = "rgb";
  var r = Math.floor((Math.random() * 255));
  var g = Math.floor((Math.random() * 255));
  var b = Math.floor((Math.random() * 255));
  resultColor += "(" + r + ", " + g + ", " + b + ")";
  return resultColor;
}

function initArrayColor() {
  for (var i = 0; i < 6; i++) {
    colors[i] = randomColor();
  }
}

function generateRandomColor(num) {
  var arrColor = [];
  for (var i = 0; i < num; i++) {
    arrColor.push(randomColor());
  }
  return arrColor;
}

function changeAllColor(color) {
  for (var i = 0; i < colorNum; i++) {
    arrSquare[i].style.background = color;
  }
  header.style.background = color;
}

var playMode = "hard";
var colors = [];
var colorNum;
var correctColor;
var colorDisplay = document.getElementById("colorDisplay");
var arrSquare = document.querySelectorAll(".square");

var message = document.querySelector("#message");
var header = document.querySelector(".header");

var backgroundColor = "#272f3a";
var headerColor = "#f42e38";

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var newColorBtn = document.querySelector("#newColorBtn");

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  playMode = "easy";
  playGame();
});
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  playMode = "hard";
  playGame();
})
newColorBtn.addEventListener("click", function() {
  playGame();
})

function resetGame() {
  for (var i = 0; i < arrSquare.length; i++) {
    arrSquare[i].style.background = backgroundColor;
  };
  header.style.background = headerColor;
  message.textContent = "";
}

function playGame() {
  resetGame();
  colorNum = 6; // hard mode
  if (playMode == "easy") {
    colorNum = 3;
  }
  colors = generateRandomColor(colorNum);
  correctColor = colors[Math.floor(Math.random() * (colorNum - 1))];
  console.log(correctColor);
  colorDisplay.textContent = correctColor;

  for (var i = 0; i < colorNum; i++) {
    arrSquare[i].style.background = colors[i];
    arrSquare[i].addEventListener("click", function () {
      if (isCorrect(this.style.background) == true) {
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


