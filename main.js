document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log("dick")
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");

  canvas.setAttribute("width", "800");
  canvas.height = 550;

  c.width = canvas.width;
  c.height = canvas.height;

  var redSquare = {
    x:0,
    y:0,
    width: 50,
    height: 50
  };

  c.fillStyle = "#f00";
  c.strokeStyle = "black";
  c.lineWidth = 2;

  function drawBoard() {
    for (var j = 0; (j * redSquare.height) < canvas.height; j++) {
      console.log("outer");
      for (var i = 0; (i * redSquare.width) < canvas.width; i++) {
        getRect(c, (i * redSquare.width), (j * redSquare.height));
      }
    }
  }

  function getRect(c, x, y) {
    console.log("butts")
    c.fillRect(x, y, redSquare.width, redSquare.height);
  }
  drawBoard();
}
