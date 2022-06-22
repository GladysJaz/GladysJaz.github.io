<?php

include "../../Controllers/CurationController.php";
include "../../Models/CurationModel.php";
include "../../Models/Conexion.php";
$ajaxDatesCuration = new CurationController();


if (isset($_POST)) {
    if (!empty($_POST)) {
        $response =  $ajaxDatesCuration->routerCuration($_POST);

       
        if($response =="mal"){
            echo json_encode("mal",http_response_code(404));
            return 0;
        }
        echo json_encode($response ,http_response_code(200));
        
        return;

    }
}
