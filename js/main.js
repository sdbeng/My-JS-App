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

    event.preventDefault();
    alert("redirecting user...");
    window.location = 'registration.html';
    
	// xmlhttp = new XMLHttpRequest();

	// xmlhttp.onreadystatechange = function() {
 //        if(xmlhttp.readyState == 4) {
 //           if(xmlhttp.status != 200) {
 //              alert('There was an error');
 //           } else {
 //           		var response = JSON.parse(xmlhttp.responseText);
 //           		if(response.status!='true') {
 //           			alert('Email taken');
 //           		} else {

 //           		}
 //           }
 //        }
 //    }

 //    xmlhttp.open('GET', 'helper.php?action=checkEmailAvailability&email='+encodeURIcomponent(form.email), true);
 //    xmlhttp.send();
	
};

// var testobj = {};