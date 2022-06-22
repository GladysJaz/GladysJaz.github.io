<?php

class CurationModel
{

    public function read($tabla, $tema, $id)
    {
        $stmt = Conexion::conectar()->prepare("SELECT * FROM $tabla where tema = :tema");

        $stmt->bindParam(":tema", $tema, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_CLASS);


    }
}
