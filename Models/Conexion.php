<?php

class Conexion
{
    

    public static function conectar()
    {
        $conn = new  PDO('mysql:host=localhost;dbname=cultura_sociedad', 'root', '');
        $conn->exec("set names utf8");
        return $conn;
    }
}
?>