<?php
$dummy=file_get_contents('php://input');
$obj=json_decode($dummy);
// print_r($obj);
if($obj){

    echo json_encode(array("status" => "success", "message" => "data recieved!"));
}


?>