// form validation

// DOM nodes
var form = {
	form_Init:	document.getElementById("formInit"),
	email: document.getElementById("email")
};

//event handler
form.form_Init.addEventListener("submit", eventStartRegHandler);

function eventStartRegHandler(event) {
		event.preventDefault();
		alert("redirecting user...");
		window.location = 'registration.html';

};