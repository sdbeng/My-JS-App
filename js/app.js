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
		console.log("go go...");

}


/*
var form = document.forms[0]; 
form.addEventListener("submit", function(evt){
  var email = form.elements['answer_1'].value;
  if( email == 'foo@bar.ca') {
     evt.preventDefault();
     alert('redirecting the user...');
     window.location = 'xxxx';
  }
});
*/