<?php
include "functions.php";

$action = $_POST["action"] ?? "";
$data = null;
switch($action){
    case "get_images":
        $data = get_images_array('../work_images/');
        break;
}

echo response($data)
?>;