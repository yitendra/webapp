//Declaration
var body=document.getElementById("container");
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

var r=225,g=0,b=0;
var perc=20;	//color 1 %age in v4
var nperc=100-perc;	// color 2 $age in v4

//Normal v1 color change
function bgcolor(fn){
	// body.style.background = "rgb("+r+","+g+","+b+")"; //Single color
	body.style.background=fn();
	if(r===225 && g<225){
		if(b!=0)b--;
		else g++;
	}else if(g===225 && b<225)	{
		if(r!=0)r--;
		else b++;
	}else if(b===225 && r<225){
		if(g!=0)g--;
		else r++;
	}
		
}

//Normal v1 color change
var normal =()=>{return "rgb("+r+","+g+","+b+")"; }

//Linear v2 color change
var linear= ()=> {return "linear-gradient(-45deg,rgb("+r+","+g+","+b+"),rgb("+g+","+b+","+r+"))"} //"rgb("+r+","+g+","+b+")";

//Radial v3 color change
var radial = ()=>{return "radial-gradient(circle,rgb("+r+","+g+","+b+"),rgb("+g+","+b+","+r+"))"}

//Linear-Radial v4 color change
var linearRadial = ()=>{return "radial-gradient(circle,rgb("+r+","+g+","+b+") "+perc+"%,rgb("+g+","+b+","+r+") "+nperc+"%)" }

//Color change Loop Interval
var interval;
function changeColor(fn){
	clearInterval(interval)
	interval=setInterval(()=>{bgcolor(fn);}, 10);
}

changeColor(linear);


//Shows mouse co-ordinates and change "perc"
function showCoords(event) {
    var x = event.clientX;
	var y = event.clientY;
	var sheight=screen.height;
	var swidth=screen.width;
	perc=x/swidth*100;
    }