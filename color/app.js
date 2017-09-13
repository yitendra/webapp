console.log('Script is Working');
var body;
body=document.getElementById("container");

var r=225;
var g=0;
var b=0;


var color='010101';
function bgcolor(){
	body.style.background = "rgb("+r+","+g+","+b+")";
	if(r===226){r=0;g=0;b=0;}
	else{
		if(g===225){b++; r--;}
		else g++;
	}
		
}

var interval;
function changeColor(){
interval=setInterval(function(){bgcolor();}, 10);
}

changeColor();