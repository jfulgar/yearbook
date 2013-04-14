<?php
	ob_start();
	session_start();
	require_once "godknows.hoangminhdat.com/login.php";
	try {
		$dbk = new PDO('mysql:host=mysql.smartwebservers.com;dbname=hngd0074',$db_username,$db_password,array(PDO::ATTR_PERSISTENT => true));
	} catch (PDOException $err) {
		die("Unable to connect: ". $err->getMessage());
	}
	$dbk->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$dbk->exec("SET CHARACTER SET utf8");
?>