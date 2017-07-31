<?php
header('Content-Type: application/json;charset=UTF-8');

@$pageNum = $_REQUEST['pageNum'];

if( ! $pageNum ){
	$pageNum = 1;
}else {
	$pageNum = intval($pageNum);
}
$output = [
	'recordCount'=>0,
	'pageSize'=>6,
	'pageCount'=>0,
	'pageNum'=>$pageNum,
	'data'=>[]
];

require('init.php');

$sql = "SELECT * FROM flesh_product";
$result = mysqli_query($conn,$sql);

$output['recordCount'] = intval(mysqli_fetch_row($result)[0]);

$output['pageCount'] = ceil( ($output['recordCount'])/($output['pageSize']) );
$start = ($output['pageNum']-1)*$output['pageSize'];

$count = $output['pageSize'];
$sql = "SELECT * FROM flesh_product LIMIT $start,$count";
$result = mysqli_query($conn, $sql);
$output['data'] = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($output);