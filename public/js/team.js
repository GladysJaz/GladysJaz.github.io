const $teamIndividual = document.querySelector(".single-team");
const $aboutUs = document.querySelector(".about-us");
const $containerTeam = document.querySelector(".container-single-team");
const $containerService = document.querySelector(".container-single-service");

if($containerTeam){
    renderSingleProfile($teamIndividual,"team.json","team");
   
}

if ($containerService) {
    renderSingleProfile($teamIndividual,"socialService.json","service");
    
}

function renderSingleProfile(containerS,file,cont){
    const url = window.location.pathname;
    var arrayDeCadenas = url.split("/");
    let server = "http://comunicacionculturaysociedad.org/"
    
    var req = new XMLHttpRequest();
    req.open('GET', `${server}public/js/${file}`, true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200) {
                let $datos = JSON.parse(req.responseText)
            
                $datos.forEach(element => {

                    if (arrayDeCadenas[2] == element.id) {
                        containerS.innerHTML = 
                        `
                        <aside class="logo-team">
                        <img src="${server}public/img/Crosa.png" alt="">
                        </aside>
                        <section class="info-team-individual">
                            <aside>

                                <div class = "container-single-photo">  
                                    <img src="${element.foto}" alt="" class="single-photo">
                
                                </div>
                                <div>
                                    <h2 class="title-perfil">${element.nombre}</h2>
                                    <h3 class="subtitle-perfil">${element.cargo}</h3>
                                </div>
                            </aside>
                            <aside>
                                <p class="semblance">
                                    ${element.semblanza1}
                                </p>
                            </aside>
                        </section>
                        <aside class="return-about">
                            <a href="${server}AboutUs#${cont}">
                                <i class="material-icons">tkeyboard_backspace
                                </i>
                            </a>
                        </aside>
                        `;
                    }

                });
            }
        }
    };
    req.send(null)
}


if ($aboutUs) {
    const $containerTeam = document.querySelector(".about-team .team");
    const $containerService = document.querySelector(".about_service .team");
    

    renderProfileAbout($containerTeam,"team.json","Team");
    renderProfileAbout($containerService,"socialService.json","Service");
}


function renderProfileAbout(container, file,view) {
    let server = "http://comunicacionculturaysociedad.org/"
    var req = new XMLHttpRequest();
    req.open('GET', `${server}public/js/${file}`, true);
    req.onreadystatechange = function (aEvt) {
        
        if (req.readyState == 4) {
            if (req.status == 200) {
                const $datos = JSON.parse(req.responseText);
                $datos.forEach(element => {
                    const $item = element;
                    container.innerHTML = container.innerHTML +
                        `
                   <aside>
                <div class="container-img">
                    <div>
                        <img src="${$item.foto}" alt="">
                    </div>
                </div>
                <div class="container-info">
                    <h2>${$item.cargo}</h2>
                    <h3>${$item.nombre}</h3>
                    <h4><a href="${server}${view}/${$item.id}">Leer perfil</a></h4>
                </div>
            </aside>
                   `
                });


            }
            else {
                location.href(server)
            }

        }
    };
    req.send(null)
}
