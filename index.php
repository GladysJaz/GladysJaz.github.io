<?php
    require_once "Config/configuracion.php";
    require_once ("Controllers/ViewsController.php");
   
    $template = new ViewsController();
    $template-> getTemplate();
