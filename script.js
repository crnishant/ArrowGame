let $playerInput = document.getElementById("playerAnswer");
var arrows = ["bluedownarrow", "blueleftarrow", "bluerightarrow", "blueuparrow",
"reddownarrow", "redleftarrow", "redrightarrow", "reduparrow"];

document.getElementById("go").addEventListener("click", function(){
    document.getElementById("gameboard").innerHTML = "";
    var img = document.createElement("img");
    img.src = "/images/"+arrows[Math.floor(Math.random()*8)] + ".png";
    var src = document.getElementById("gameboard");
    src.appendChild(img);
})
