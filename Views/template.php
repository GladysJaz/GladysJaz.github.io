<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="es-MX" xml:lang="es-MX">

<head>

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comunicación Cultura y Sociedad</title>

  <link rel="icon" href="<?php echo SERVER; ?>public/img/logo-b.ico">
  <!-- librerias externas -->
  <!-- librery de modal jquery -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />


  <!-- Estilos para loading -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/loading.css">

  <!-- Estilos de Team -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/Team.css">

  <!-- Estilos generales de componentes -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/normalize.css">
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/index.css">

  <!-- Estilo de menu -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/menu.css">


  <!-- Estilos para la página de NotFound -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/noFound.css">

  <!-- Estilos de map -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/Map.css">

  <!--estilos home -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/carrousel.css">
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/home.css">

  <!-- Estilo de Contacto -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/contact.css">

  <!--Estilos footer  -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/footer.css">

  <!-- Estilos de AboutUs -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/nosotros.css">

  <!-- Estilos de curadurías -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/Curation.css">

  <!-- Estilos de fichas completa y sus relaciones en la vista ComunicationHealth -->
  <link rel="stylesheet" href="<?php echo SERVER; ?>/public/css/ComunicationHealth.css">


  <link rel="stylesheet" href="<?php echo SERVER; ?>public/css/News.css">


  <!-- inconos de materialize -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">

  <!-- iconos de fonawesone -->
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />


  <!-- fuente fira sans seminbold -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500&display=swap" rel="stylesheet">

  <!-- fuente lato -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
  <span class="father-container father-container-hiden">
    <!-- incluimo el controlador para la vistas que sera usado 
    en el tercer script
  -->
    <?php
    include_once "Controllers/ViewsController.php";
    ?>


    <!-- navegación -->
    <?php
    include_once "Views/modules/navbar.php";
    ?>

    <!-- vistas dinamicas -->
    <?php

    $ViewT = new  ViewsController();
    require_once $ViewT->getViewsController();


    ?>


    <!-- footer -->
    <?php
    include_once "Views/modules/footer.php";
    ?>

    <!-- javascript -->

    <?php
    include_once "Views/modules/scripts.php";
    ?>
  </span>
  <div class="container-loading loading-visible">
    <div class="loader">

    </div>
  </div>
</body>

</html>