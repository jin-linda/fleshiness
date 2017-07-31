<?php

header('Content-Type: application/json;charset=UTF-8');
@$uname = $_REQUEST['uname'] or die('{"code":3,"msg":"uname required"}');
@$upwd = $_REQUEST['upwd'] or die('{"code":4,"msg":"upwd required"}');
require('init.php');
$sql = "INSERT INTO flesh_user VALUES(NULL,'$uname','$upwd');";
$result = mysqli_query($conn,$sql);
$output = [];
if($result===false){
    $output['code'] = 2;
    $output['msg'] = 'insert err';
    $output['sql'] = $sql;
}else {
    $output['code'] = 1;
    $output['msg'] = 'insert succ';
    $output['userId'] = mysqli_insert_id($conn);
}
echo json_encode($output);

