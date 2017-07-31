<?php

  header("Content-Type:application/json");

  @$start = $_REQUEST['start'];
  if(empty($start)){$start = 0;}
  $count = 6;
  require('init.php');
  $sql = "SELECT * FROM flesh_art LIMIT $start,$count";
  $result = mysqli_query($conn,$sql);
  $output = [];
  while(true)
  {
      $row = mysqli_fetch_assoc($result);

     // $time =intval($row['atime']);转为时间
     // $newdate= date("Y-m-d H:i:s", strtotime($time));
      //echo $newdate;
      //$row['atime']=$newdate;

      if(!$row){break;}
      $output[] = $row;

  }
  echo json_encode($output);
  ?>