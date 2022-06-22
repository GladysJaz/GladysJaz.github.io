<?php


class CurationController
{
    public function routerCuration($url)
    {
        $tema =  explode("/",$url["url"]);
        array_shift($tema);
        $bandera = FALSE;

        
        
        if($tema[0]=="CommunicationHealth"){
            
            $modelDatecuration = new CurationModel();

            $datos = $modelDatecuration->read("fichascuraduria","Comunicación y Salud",$tema[1]);
            $json =  array();
            foreach ($datos as $key => $value) {
                if(($key+1)==$tema[1]){
                    $bandera = true;
                    $json["currentTab"][]= $value;
                    $key-1;
                }
                else{
                    $json["alltabs"][]= $value;
                }
               
            }

            if(!$bandera){
                return "mal";
            }

            return $json;
        }
        else{
            return "mal";
        }

        
    }
    public function Comunicacion_salud(){

        return;
    }
}
