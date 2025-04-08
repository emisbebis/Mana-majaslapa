document.getElementById("rinkis").onclick=function() {
	this.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
	document.getElementById("note").innerHTML="Katru reizi noklikšķinot nejauša krāsa";
}