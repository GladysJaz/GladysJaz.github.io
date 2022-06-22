<?php
require_once "./models/ViewsModels.php";

class ViewsController extends ViewsModels
{
    public function  getTemplate()
    {
        return require_once "Views/template.php";
    }

    public function getViewsController()
    {

        if(isset($_GET['url'])){
            $router =  explode("/", $_GET["url"]);
            $respuesta=self::getViewModel($router[0]);
        }
        else{
            $respuesta = "Views/content/home.php";
        }
        return $respuesta;
       
    }
}
