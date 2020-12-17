const d = document,
$form = d.querySelector(".form-reporte"),
$div_form = d.getElementById("contenedor-form"),
$div_mensaje = d.getElementById("mensaje_gracias");

function ocultar(props){
    $div_form.style.display = ($div_form.style.display == 'none') ? 'block' : 'none';
    $div_mensaje.innerHTML= " Gracias por informarnos.";
}



d.addEventListener("submit", async (e) => {
    console.log(e);
    if (e.target === $form) {
      e.preventDefault();
      console.log(e.target.username);
      console.log(e.target.email);
    }
})
