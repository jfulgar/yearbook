<?php
//=============Copyright - Minh Dat Hoang 2013====================
//function list:

//===mysql_fixIn($string) -> real escape string => safe to go to the database => no SQL Injection
//===mysql_fixOut($string) -> htmlentities => safe to go out to HTML => no XXL
//===slashAdd(string) -> addslash
//===blog_summary($content, $words) -> Show first $words words of a paragraph
//===fixEST($string) -> remove (EST) or (Easten S... Time) in the date object string
//===sessionOutKeo(); -> destroy sessions



//===========Need Customization===============
//===isAuthorized($timeoutPeriod); -> check are there cookies or sessions, if (cookies) create sessions; else {if(timeout) destroy session and return false; else check session}; return true if there are valid session
//===cookieOutKeo() -> destroy cookies
//===sessionInKeo($userName, $userID, $admin) -> register sessions, need userName, userID, and if user is an admin, use 'yes', else, just use NULL
//===cookieInKeo($userName, $userID, $admin, $time) -> register coockies, need userName, userID, 'yes' for admin (NULL otherwise), and cookies' lifetime. pass NULL to $time will take the default value of a month ($time = time()+60*60*24*30;)
//===saltKeoMD5(string) -> salt MD5ing in Keo style :D
//===keoInit() -> init new documents



//==========initialize code====================

	function mysql_fixIn($string) {
		if(get_magic_quotes_gpc()){$string = stripslashes($string);}
		return mysql_real_escape_string($string);
	};
	function mysql_fixOut($string) {
		return htmlentities($string);
	};
	function slashAdd($string) {
		if(!get_magic_quotes_gpc()){$string = addslashes($string);}
		return $string;
	};
	function blog_summary( $content , $words) {
	   $position = @strpos( $content, ' ', $words );
	   if( $position ) {
		  $content = substr( $content, 0, $position );
	   }
	   $content = nl2br( $content );
	   $content .= '...';
	
		return $content;
	};
	function fixEST($string){
		$stringIndx = strpos($string, "(");
		return substr($string,0,$stringIndx);
	};
	function sessionOutKeo() {
		session_start();
		$_SESSION = array();
		if(session_id() != '' || isset($_COOKIE[session_name()])) {
			setcookie(session_name(), '', time() - 3600);
			session_destroy();
		}
	};
	
	//==============customize if needed=============
	function isAuthorized($timeoutPeriod) {
		if(isset($_COOKIE['user']) && $_COOKIE['check'] == md5($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'].'KEO') && isset($_COOKIE['userID']) ) {
			$_SESSION['user'] = $_COOKIE['user'];
			$_SESSION['check'] = md5($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'].'KEO');
			$_SESSION['userID'] = $_COOKIE['userID'];
			$_SESSION['initiated'] = true;
			if($_COOKIE['admin'] == 'yes'){
				$_SESSION['admin'] = 'yes';
			}
			return true;
		} else {
			if($_SESSION['timeout'] + $timeoutPeriod < time()){
				sessionOutKeo();
				return false;
			} else {
				if(isset($_SESSION['user']) && $_SESSION['check'] == md5($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'].'KEO') && isset($_SESSION['userID']) && $_SESSION['initiated']) {
					return true;
				} else {
					session_regenerate_id();
					return false;
					
				}
			}
		}
	};
	function cookieOutKeo() {
		setcookie("user",'',time()-3600);
		setcookie("check",'',time()-3600);
		setcookie("userID",'',time()-3600);
		setcookie("admin",'',time()-3600);
	};
	function sessionInKeo($userName, $userID, $admin) {
		$_SESSION['user'] = $userName;
		$_SESSION['check'] = md5($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'].'KEO');
		$_SESSION['userID'] = $userID; 
		if(!isset($_SESSION['initiated'])){
			session_regenerate_id();
			$_SESSION['initiated'] = 1;
		}
		if($admin == 'yes'){
			$_SESSION['admin'] = 'yes';
		}
		$_SESSION['timeout'] = time();
	};
	function cookieInKeo($userName, $userID, $admin, $time) {
		if($time == NULL){
			$time = time()+60*60*24*30;
		}
		setcookie("user",$userName,$time);
		setcookie("check",md5($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT'].'KEO'),$time);
		setcookie("userID",$userID,$time);
		if($admin == 'yes'){
			setcookie("admin",'yes',$time);
		}
	}
	function saltKeoMD5($string) {
		$salt1 = '%$^$';
		$salt2 = '*^__KEO';
		return md5($salt1 . $string . $salt2);
	};
	function keoInit() {
		ob_start();
		session_start();
	};
?>