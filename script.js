var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var rgb = document.getElementById("rgb");
var reset = document.querySelector("#reset");
var message = document.getElementById("message");
var modeBtns = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init(){
	setModeBtns();
	resetGame();
	setSquares();
}

function setModeBtns(){
	for(var i = 0; i < modeBtns.length; i++){
	    modeBtns[i].addEventListener("click", function(){
		    modeBtns[0].classList.remove("selected");
		    modeBtns[1].classList.remove("selected");
		    this.classList.add("selected");
		    this.textContent === "EASY" ? numSquares = 3: numSquares = 6
		    resetGame();
	    });
    }
}

function resetGame(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();

	rgb.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		    squares[i].style.display = "block";
		    squares[i].style.backgroundColor = colors[i];
		}else{
		    squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "rgb(245, 201, 7"; 
	reset.textContent = "NEW COLORS";
	message.textContent = " ";
}

reset.addEventListener("click", function(){
	resetGame();
});

function setSquares(){
	for(var i = 0; i < squares.length; i++){
	    squares[i].style.backgroundColor = colors[i];
	    squares[i].addEventListener("click", function(){
		    var clickedColor = this.style.backgroundColor;
		    if(clickedColor === pickedColor){
			    for(var i = 0; i < squares.length; i++){
				    squares[i].style.backgroundColor = pickedColor;
			    }
			    h1.style.backgroundColor = pickedColor;
		        message.textContent = "CORRECT!";
		        reset.textContent = "PLAY AGAIN!";
		    }else{
			    this.style.backgroundColor = "#232323" ;
			    message.textContent = "WRONG!! TRY AGAIN!";
		    }
	    });
    }

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

