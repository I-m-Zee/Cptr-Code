/*Name this external file gallery.js*/

var Fruits = ["Banana", "Apple", "Phulotar", "Malta"];

function loadFruits(){
	document.getElementById("fruit").innerHTML=Fruits;
}

function addFruit(){
var fruit = prompt("Add Your Favourit Fruit: ");
Fruits[Fruits.length] = fruit;
document.getElementById('fruit').innerHTML=Fruits;	
}