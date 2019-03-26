document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log("dick")
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");

  canvas.width = 550;
  canvas.height = 550;

  c.width = canvas.width;
  c.height = canvas.height;

  var boardSquare = {
    x:0,
    y:0,
    width: (canvas.width/8),
    height: (canvas.height/8),
    colors: ["black", "red"]
  }

  console.log(boardSquare.colors[0], boardSquare.colors[1]);

  c.fillStyle = "#f00";
  c.strokeStyle = "black";
  c.lineWidth = 2;

  function drawBoard() {
    for (var j = 0; (j * boardSquare.height) < canvas.height; j++) {
      for (var i = 0; (i * boardSquare.width) < canvas.width; i++) {
        c.fillStyle = boardSquare.colors[(i + j)% boardSquare.colors.length];
        getRect(c, (i * boardSquare.width), (j * boardSquare.height));
      }
    }
  }

  function getRect(c, x, y) {
    console.log("butts")
    c.fillRect(x, y, boardSquare.width, boardSquare.height);
  }
  drawBoard();
}
