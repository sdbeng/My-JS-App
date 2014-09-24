<?php
$dbhost = 'west87432.db.7866128.hostedresource.com';
$dbname = 'west87432';
$dbuser = 'west87432';
$dbpass = 'CoolZ3R0@ps';

mysql_connect($dbhost, $dbuser, $dbpass);
mysql_select_db($dbname);

function checkEmailAvailability() {
	$response['status'] = false;

	if(!isset($_GET['email']) || !filter_var($_GET['email'], FILTER_VALIDATE_EMAIL)) {
		die(json_encode($response));
	}

	$query = 'SELECT `id` FROM `users` WHERE `email` = "'.mysql_real_escape_string($_GET['email']).'"';
	$result = mysql_query($query);
	if(mysql_num_rows($result)<1) {
		$response['status'] = true;
	}
	die(json_encode($response));
}

function signUp() {
	
}

if(isset($_GET['action']) && $_GET['action']=='checkEmailAvailability') {
	checkEmailAvailability();
}

?>