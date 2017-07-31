<?php
/**
验证客户端提交的用户名是否存在
**/
header('Content-Type: text/plain');

@$uname = $_REQUEST['uname'] or die('UNAME REQUIRED');
require('init.php');

$sql = "SELECT * FROM flesh_user WHERE uname='$uname'";
$result = mysqli_query($conn,$sql);
if($result===false){
	echo "SQL ERR: $sql";
}else {
	$row = mysqli_fetch_assoc($result);
	if($row===null){
		echo 'ok';
	}else {
		echo 'no';
	}
}