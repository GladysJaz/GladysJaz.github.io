const $carrousel = document.querySelector(".home_carrousel");
const $formularioContacto = document.querySelector(".formulario-contacto");
const $textoEnlace = document.querySelector(".texto-en");

if ($carrousel) {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

function copyR() {
    let fechaFooter = document.querySelector(".copyr");
    var today = new Date();
    let ahora = today.getFullYear();
    fechaFooter.innerHTML = ahora;
}
copyR();


if ($formularioContacto) {
    $formularioContacto.addEventListener("submit", event => {
        validateForm(event)
    });
}



function validateForm(event) {
    event.preventDefault();

    if (!event.target.elements[0].value) {
        alerta("El nombre es obligatorio", "warning");
        return;
    }
    if (!event.target.elements[1].value) {
        alerta("El Teléfono es obligatorio", "warning");
        return;
    }
    if (!event.target.elements[2].value) {
        alerta("El correo es obligatorio", "warning");
        return;
    }
    if (!event.target.elements[3].value) {
        alerta("El mensaje no debe ir vacío", "warning");
        return;
    }
    alerta("Datos enviados", "success");
    event.target.reset();


}

function alerta(input, tipo) {
    Swal.fire({
        position: 'center',
        icon: tipo,
        title: input,
        showConfirmButton: false,
        timer: 1500
    })

}


if($textoEnlace){
    $textoEnlace.addEventListener("click",textoEnlace);
}

function textoEnlace(){
    const resumen =  document.querySelector(".resumen");
    const viewer = screen.width;
    console.log(viewer);
    if(viewer>1025){
        Swal.fire({
       
            text: resumen.textContent,
            width: 600
           
            
          })
    }

    else if(viewer>400){
        Swal.fire({
       
            text: resumen.textContent,
            width: 400
          })
    }
    else{
        Swal.fire({
       
            text: resumen.textContent,
            width: 350
          })
    }
    
    
}