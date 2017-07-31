<?php
header("Content-Type:application/json");
require('init.php');
$sql = "SELECT * FROM flesh_art_text";
$result = mysqli_query($conn,$sql);

$list = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($list);
?>