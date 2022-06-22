<?php

class ViewsModels
{

    protected function getViewModel($view)
    {
        $viewWhiteList = ["home", "contact", "AboutUs",
         "Team", "Map", "Curation","CommunicationHealth","News","Service"];

        if (in_array($view, $viewWhiteList)) {
            return "Views/content/" . $view . ".php";
        } else if ($view == "index") {
            $contenido = "Views/content/home.php";
        } else {
            $contenido = "Views/content/NotFound.php";
        }
        return $contenido;
    }
}
