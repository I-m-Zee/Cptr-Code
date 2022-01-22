/*function firstClick(){
	document.getElementById("stuff").innerHTML = "First Button Clicked";
}
function secondClick(){
	document.getElementById("stuff").innerHTML = "Second Button Clicked";
}
*/
function closeFunction(){
	x = document.getElementById("demo");
	//Option 1: Change the attribute directly
	x.style.display = "none";
	//Option 2: Call the css class
	//x.className="closed";

}
function openFunction(){
	y = document.getElementById("demo");
	//Option 1: Change the attribute directly
	y.style.display = "block";
	//Option 2: Call the css class
	//y.className="open";
}