const d = document,
  $table_usuario = d.querySelector(".tb-usuario"),
  $table_misproyetos = d.querySelector(".tb-mis_proyectos"),
  $template = d.getElementById("datos_usuario").content,
  $template2 = d.getElementById("mi_proyecto").content,
  $fragment = d.createDocumentFragment(),
  $fragment2 = d.createDocumentFragment();

const getAll = async () => {
  try {
    //recuperar de local storage
    const $clave = localStorage.getItem(localStorage.key(0));
    let clave = $clave.split(",");
    ///console.log(clave);
    //------
    let options = {
      method: "GET",
      headers: {
        host: "telechambac19.herokuapp.com",
        origin: "/perfil.html",
        //"Access-Control-Allow-Origin": no - cors,
      },
    };
    let res = await fetch(
      `https://telechambac19.herokuapp.com/adminproyectos?creador=${clave[0]}`,
      options
    );
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    console.log(json);

    json.forEach(async (element) => {
      let $id = element._id["$oid"];
      $template2.getElementById("nombre_proyecto").textContent = element.nombre;
      $template2.getElementById("ruc_empresa").textContent = element.ruc;
      //agregando los data atributes
      //$template2.querySelector(".publicar").dataset.ruc = element.ruc;
      $template2.querySelector(".ver").dataset.ruc = element.ruc;

      //$template2.querySelector(".publicar").dataset.nombre = element.nombre;
      $template2.querySelector(".ver").dataset.nombre = element.nombre;

      let $clone = d.importNode($template2, true);
      $fragment.appendChild($clone);
    });
    $table_misproyetos.querySelector("tbody").appendChild($fragment);
    // -----tb nombre-apellido
    $template.getElementById("nombre_usuario").textContent = clave[1];
    $template.getElementById("apellido_usuario").textContent = clave[2];
    // agregando los data atributes
    $template.getElementById("nombre_usuario").dataset.email = clave[0];
    $template.getElementById("apellido_usuario").dataset.email = clave[0];
    $fragment2.appendChild($template);
    $table_usuario.querySelector("tbody").appendChild($fragment2);
    // guardar el proyecto en el local storage
  } catch (error) {
    let message = error.statusText || "Ocurrio un error";
    console.log(error);
  }
};

d.addEventListener("DOMContentLoaded", getAll);
// botones
d.addEventListener("click", (e) => {
  if (e.target.matches(".ver")) {
    const $ruc = e.target.dataset.ruc; // el ruc de la empresa
    const $nombre = e.target.dataset.nombre;
    let $id = "verproyectocreado";
    console.log($id);
    let $datos = [$ruc, $nombre];
    localStorage.setItem($id, $datos);
    console.log(
      `guardando en local storage  el id es :${$id} con los datos ${$datos}`
    );
    location.href = "/datosadmiproyecto.html";
  }
  /*if (e.target.matches(".publicar")) {
    let respuesta = confirm("publicar");
    if (respuesta) {
    }
  }*/
});
