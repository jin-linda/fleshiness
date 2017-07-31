<?php

header('Content-Type: application/json;charset=UTF-8');

@$pkind = $_REQUEST['pkind'] or die('{"msg":"err", "reason":"pkind required"}');

require('init.php');

$sql = "SELECT * FROM flesh_product WHERE pkind='$pkind'";

$result = mysqli_query($conn,$sql);
$list = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);

