var playerInput = document.getElementById("playerAnswer");
var score = 0;
var gameState = "active";
var scoreInc = false;
let arrows = ["bluedownarrow", "blueleftarrow", "bluerightarrow", "blueuparrow",
"reddownarrow", "redleftarrow", "redrightarrow", "reduparrow"];
let currentImage = arrows[0];

function updateGame(){
	document.getElementById("gameboard").innerHTML = "";
	setTimeout(createNewImage, 500);
	document.addEventListener("keyup", event => {
		if(event.keyCode== 37 && scoreInc){
			//console.log("left");
			if(currentImage=="blueleftarrow" || currentImage == "redrightarrow"){
				score+=100;
			}
			scoreInc = false;
			console.log(score);
		}
		else if(event.which == 39 && scoreInc){
			//console.log("right");
			if(currentImage=="bluerightarrow" || currentImage == "redleftarrow"){
				score+=100;
			}
			scoreInc = false;
			console.log(score);
		}
		else if(event.which == 38 && scoreInc){
			//console.log("up");
			if(currentImage=="blueuparrow" || currentImage == "reddownarrow"){
				score+=100;
			}
			scoreInc = false;
			console.log(score);
		}
		else if(event.which == 40 && scoreInc){
			//console.log("down");
			if(currentImage=="bluedownarrow" || currentImage == "reduparrow"){
				score+=100;
			}
			scoreInc = false;
			console.log(score);
		}
	});
}

function createNewImage(){
	var img = document.createElement("img");
	currentImage = arrows[Math.floor(Math.random()*8)];
	img.src = "/images/"+ currentImage + ".png";
	var src = document.getElementById("gameboard");
	src.appendChild(img);
	scoreInc = true;
}

function start(){
	var self = this;
	setInterval(updateGame,1000);
}

start();

