// form validation

// DOM nodes

var form = {
	register:	document.getElementById("register"),
	firstName: document.getElementById("firstName"),
	lastName: document.getElementById("lastName"),
	bday: document.getElementById("birthday")
};


//delegate handler


//register step2 handler

form.register.addEventListener("submit", eventRegHandler2);

function eventRegHandler2(event) {
	
		event.preventDefault();
		alert("Welcome to our social network...");
		window.location = 'home.html';
		console.log("going home page...");

}
