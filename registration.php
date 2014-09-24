<!DOCTYPE html>
<html>
<head>
	<title>JavaScript Social by Serg - Reg page step2</title>
	<link href='http://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/style.css">
		
</head>
<body>
	<header>
		<h1>Registration page - step2</h1>
	</header>
	
	<section>
		<form id="register" action="home.html" method="post">
			<label for="firstName">Please enter your first name:</label><br/>
			<input id="firstName" type="text" name="firstName" autofocus placeholder="your firstname..." required/><br/>
		
			<label for="lastName">Enter your last name:</label><br/>
			<input id="lastName" type="text" name="lastName" autofocus placeholder="your lastname..." required/><br/>

			<label for="birthday">Enter your birthday:</label><br/>
			<input id="birthday" type="date" name="birthday" autofocus placeholder="your birthday..."required/><br/>
			<input type="hidden" name="email" value="<?php echo $_POST['email']; ?>" />

		<button id="btn2" type="submit" class="btninit" >Sign up</button>
			
		</form>
		
		
	</section>
	


	<script src="js/app.js"></script>
	

</body>
</html>