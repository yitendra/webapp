console.log('Script is Working');
var body;
body=document.getElementById("container");

var r=225,g=0,b=0;

function bgcolor(){
	body.style.background = "radial-gradient(circle,rgb("+r+","+g+","+b+"),rgb("+g+","+b+","+r+"))" //"rgb("+r+","+g+","+b+")";
	if(r===225 && g<225){
		if(b!=0)b--;
		else g++;
	}else if(g===225 && b<225){
		if(r!=0)r--;
		else b++;
	}else if(b===225 && r<225){
		if(g!=0)g--;
		else r++;
	}
		
}

var interval;
function changeColor(){
interval=setInterval(function(){bgcolor();}, 10);
}

changeColor();