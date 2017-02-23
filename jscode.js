//Hello name function

var name = prompt("Enter your name");
function hello(){
	alert("Hello "+name)
}


// Looping or repitition

pls = ["Java", "Python", "Javascript"]

for (var i = 0; i<pls.length; i++ ) {
	document.write(i + " item is: " + pls[i]);
}

var password = "";

do {
	password = prompt("Enter your password");
}
while (password!=123456)



function change() {
	document.getElementById("mydiv").innerHTML = "This is another paragraph";
}