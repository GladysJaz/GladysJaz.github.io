# PROYECTO de Comunicación Cultura y Sociedad

Para crear el proyecto, se debe clonar el repositorio..
- git clone https://github.com/asociacioncivil/asociacion.git
- abrir archivo README.md
- dentro del proyecto existen dos ramas aparte de la master una de ellas es  producción y la otra desarrollo: para moverse a desarrollo escribir en cmd o gitbash: **git checkout desarrollo** 
## Arquitectura del proyecto.
El proyecto esta desarrollado sobre MVC (Modelo vista controlador). A continuación se explica a grandes rasgos el proyecto.

**Archivo .htaccess**: 
  > Este archivo esta en la raiz del proyecto para proteger las carpetas de nuestro directorio, cada consulta o direccionamiento llegaran al index y unicamente por este se dara acceso, la siguiente linea es la encargada del ruteo.
  RewriteRule ^([a-z-A-Z0-9/]+)$ `index.php?url`=$1&parameter=$1
  la `url` sera clave para detectar que vista hay que mostrar

**Archivo index.php**:
> las llamadas a las vistas son hechas a través de index.php toda la logica de las vistas son procesadas por un metodo de nombre getTemplate() que esta en una clase ViewsController(), por ello se manda a llamar su instancia
$template = new ViewsController();
$template-> getTemplate();

**Carpeta Views**:
 > Dentro de esta carpeta tenemos el template cuerpo general de html, lo estatico son los estilos y las etiquetas head, los scripts, navegacion y footer. estos ultimos tres son archivos separados debido a que se llaman desde un archivo php
 
    include_once "Views/modules/navbar.php";
    
    include_once "Views/modules/footer.php";
    
    include_once "Views/modules/scripts.php";
    
> Lo dinamico del sitio son las vistas lo cual estas son invocadas mediante un metodo getViewsController(); que esta dentro de una clase ViewsController en el archivo ViewsController.php
> Todo el cuerpo del body html tendra de codigo todo lo anterior de la siguiente manera


    
    include_once "Controllers/ViewsController.php";

    <?php
    include_once "Views/modules/navbar.php";
    ?>
    <?php
    $ViewT = new  ViewsController();
    require_once $ViewT->getViewsController();
    ?>
    <?php
    include_once "Views/modules/footer.php";
    ?>
    <?php
    include_once "Views/modules/scripts.php";
    ?>

> la carpeta content tiene las vistas

> la carpeta modules tiene los archivos footer, nav.php y scripts.php

**Carpeta public**
> Contiene los estilos css, imagenes, archivos javascript, un archivo php donde se realizan las peticiones AJAX, y contiene dos archivos JSON los cuales contienen los datos del equipo de la organizacion y los chicos de servicio social, estos son usados para ser mostrados en la vista de AbouUs (https://comunicacionculturaysociedad.org/AboutUs)


**Carpeta Controllers**
>Contiene CurationControlle.php este archivo es encargado de extraer los datos de la base de datos de curadurias, para ser exacto las de comunicacion y salud. el modelo para extraer los datos esta en la carpeta models.
tambien contiene el archivo ViewsController.php el cual es encargado de recibir por medio de una url amigable el parametro url que es enviado ´por medio de get la url es procesada en este archivo. esta linea de codigo es donde lee la url y es mandada a llamar un modelo donde contiene las vistas.
 
if(isset($_GET['url']))
{
        $router =  explode("/", $_GET["url"]);
        $respuesta=self::getViewModel($router[0]);
}




**Carpeta Models**
> Contiene los archivos Conexion.php, CurationModel.php y ViewsModels, las vistas que son enviadas para ser procesadas en los controladores son hechas por el archivo ViewsModels, las vistas que son soportadas estan dentro de un arreglo:
$viewWhiteList = [“home”, “contact”, “AboutUs”,
“Team”, “Map”, “Curation”,“CommunicationHealth”,“News”];
si en un futuro se desea agregar mas vistas, es aqui donde se deben agregar.
si la vista solicitada por el controlador esta dentro de la lista blanca del arreglo retorna esa vista retornando la ubicacion de vista de la siguiente manera:
return “./Views/content/” . $view . “.php”;
el archivo Conexion.php tiene la conexion a la base de datos po medio de la clase PDO
La conexion a la base de datos recibe como parametros lo siguiente
* para la base de datos en produccion:  $conn = new  PDO('mysql:host=localhost;dbname=u817087084_ccs', 'u817087084_ccs', '12345Ccs');
* para la base de datos en desarrollo: $conn = new  PDO('mysql:host=localhost;dbname=cultura_sociedad', 'root', '');


**Carpeta config**
> Contiene un archivo donde almacena variables globales. la variable global usada es SERVER, la cual se usa para hacer refencias a los estilos e imagenes: el archivo tiene el nombre configuración.php y tiene la variable const SERVER = "http://localhost/cultura_sociedad/"; , esta se usa en el index y es desde ahi donde puede hacerse referencia en cualquier parte del sitio  web.
un ejemplo de su uso es:
index.php

    require_once "Config/configuracion.php";
    require_once ("Controllers/ViewsController.php");
   
    $template = new ViewsController();
    $template-> getTemplate();
por ejemplo si queremos hacer referncia a un archivo css se usa de la siguiente manera en el template.php : <link rel=“stylesheet” href="<?php echo SERVER; ?>/public/css/loading.css">

   **creacion de la base de datos**
  > en PHPMyAdmin ubicarse en la pestaña de sql
  insertar el siguiente los comando que vienen en el archivo databases.txt
