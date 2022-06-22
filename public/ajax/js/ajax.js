let $CommunicationHealth = document.querySelector(".CommunicationHealth");

let server = "http://comunicacionculturaysociedad.org/"

if ($CommunicationHealth) {
    ajaxCurationHealth(location.pathname);
}
// *********************************************************************************************************

function ajaxCurationHealth(url) {
    
    let container =  document.querySelector(".here");
    let ficha_unicaIconos =  document.querySelector(".firs-c");
    let allFichas =  document.querySelector(".second-s");
    let tabs_contain1 =  document.querySelector(".tabs_all_1");
    let tabs_contain2 =  document.querySelector(".tabs_all_2");

    let ajaxphp = server + "public/ajax/ajax.php";
    let $datos = new FormData();
    
    $datos.append("url",url);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
            let response = JSON.parse(this.responseText);
            
            let ficha_unica = response.currentTab;
            let todas_fichass= response.alltabs;
            let tamanio_pantalla =  screen.width;

            renderBigTab(ficha_unicaIconos,allFichas,ficha_unica);

            if(tamanio_pantalla>768){
            
                todas_fichass.forEach((element,key) =>  {
                    if((key%2)==0){
                        renderdekstopsTabs(tabs_contain1,element)
                        
                    }
                    else{
                        renderdekstopsTabs(tabs_contain2,element)
                    }
                });   
                return;

            }
            else{
                let containfichas_mobil = document.querySelector(".conta_mobil_tabs");
                renderMobilTabs(containfichas_mobil,todas_fichass);
                
                return;
            }

            return;
       }
       else if(this.status == 404){
            pageNotFound(container);            
       }    
       
    };
    xhttp.open("POST", ajaxphp, true);
    xhttp.send($datos);
}

// **********************************************************************************************************
function pageNotFound($container){
    $container.innerHTML =  `
        <main class="Not-found">

            <div class="container-notfound">

                <div class="emoji">
                    <i class="far fa-frown"></i>
                </div>
                <div>
                    <img src="${server}public/img/PNF5.png" alt="">
                </div>

            </div>

        </main>`
}

// *********************************************************************************************************
function renderMobilTabs($containfichas_mobil, $datosRender){
    
    $datosRender.forEach(element => {
        $containfichas_mobil.innerHTML = $containfichas_mobil.innerHTML + 
            `
            <section class="c-1">

                <div class="dates-curation">
                    <div>
                        <img src="${server}public/img/curation/icons/${element.tipoMaterial}.png" alt="">
                    </div>
                    <div>
                        <p>
                            ${element.titulo}
                        </p>
                    </div>
                    <div>
                        <p>
                            ${element.subtitulo}
                        </p>
                    </div>
                    <div>
                        <p>
                            ${element.autores}
                        </p>
                    </div>
                </div>
                <div class="curious-fact">
                    <div class="ficha">
                            <a href="${server}CommunicationHealth/${element.id}"><img src="${server}public/img/curation/icons/Recurso.png" alt=""></a>
                    </div>
                    <p>

                    </p>
                </div>
            </section>
            `
    });
}

// ********************************************************************************************************
function renderdekstopsTabs($containfichas_dektop, $datosRender){
    $containfichas_dektop.innerHTML =  $containfichas_dektop.innerHTML +
        `
        <div class="fichas_a">
            <section class="c-1">

                <div class="dates-curation">
                    <div>
                        <img src="${server}public/img/curation/icons/${$datosRender.tipoMaterial}.png" alt="">
                    </div>
                    <div>
                        <p>
                            ${$datosRender.titulo}
                        </p>
                    </div>
                    <div>
                        <p>
                            ${$datosRender.subtitulo}
                        </p>
                    </div>
                    <div>
                        <p>
                            ${$datosRender.autores}
                        </p>
                    </div>
                </div>
                <div class="curious-fact">
                    <div class="ficha">
                        <a href="${server}CommunicationHealth/${$datosRender.id}"><img src="${server}public/img/curation/icons/Recurso.png" alt=""></a>
                    </div>
                    <p>

                    </p>
                </div>


            </section>

            <aside>
                <div>
                    <img src="${server}public/img/icons/arrow_horizontal.png" alt="">
                </div>
            </aside>
        </div>
        `;
}

// ********************************************************************************************************
function renderBigTab($containIcons,$containDatos, $datos){

    $containIcons.innerHTML = `
            
            <div class="tema_curation-single">
                <div>
                    <img src="${server}/public/img/curation/icons/${$datos[0].tipoMaterial}.png" alt="">
                </div>

            </div>
            <div class="eje">
                <div>        
                    <img src="${server}/public/img/curation/icons/${$datos[0].eje}.png" alt="">
                </div>
            </div>
            
            
            `;
            
    $containDatos.innerHTML =  `
        <div class="info-1">
            <h1> 
                ${$datos[0].titulo}
            </h1>
            <h2>
                ${$datos[0].subtitulo}
            </h2>
            <p class="tores">
                ${$datos[0].autores}
            </p>
            <p class="pag">
                ${$datos[0].volumen}
            </p>
            <section class="liga-modal">
                <a href="${$datos[0].origineliga}" target="_blank">Documento completo</a>
            </section>
        </div>
        <div class="second-dd">
            <p class="desc">
                ${$datos[0].descripcion}
            </p>
        </div>
    
    `;
}