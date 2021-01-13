const d = document,
  $form = d.querySelector(".formulario"),
  $fragment = d.createDocumentFragment();
// envia el usuario

d.addEventListener("submit", async (e) => {
  console.log(e);
  if (e.target === $form) {
    e.preventDefault();
    console.log("email:",e.target.email)
    console.log("contraseña:",e.target.password)
    console.log("go to pagina principal")
    location.href = "./secciones.html";
   /*  try {
      let options = {
        method: "GET",
        headers: {
          host: "telechambac19.herokuapp.com",
          origin: "/login.html",
          //"Access-Control-Allow-Origin": no - cors,
        },
      };
      let res = await fetch(
        `https://telechambac19.herokuapp.com/login?usr=${e.target.email.value}&pas=${e.target.password.value}`,
        options
      );
      let json = await res.json();
      console.log(json["msg"]);
      let res2;
      if (json["msg"] == "UserCorrecto") {
        // crear una base de datos local para el usuario
        let $emailconsulta = e.target.email.value;
        console.log($emailconsulta);
        res2 = await fetch(
          `https://telechambac19.herokuapp.com/getusers?usr=${$emailconsulta}`,
          options
        );
        let json_usuario = await res2.json();
        console.log(json_usuario);
        let $id = "login_user", //json_usuario[0]._id["$oid"],
          $nombre = json_usuario[0]["nombre"],
          $apellido = json_usuario[0]["apellido"],
          $email = json_usuario[0]["userame"];
        //console.log($id);
        let $datos = [$emailconsulta, $nombre, $apellido];
        localStorage.setItem($id, $datos);
        console.log(
          `guardando en local storage  el id es :${$id} con los datos ${$datos}`
        );
        location.href = "/dashboard.html";
      } else {
        alert("usuario incorrecto");
      }

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      if (!res2.ok) throw { status: res2.status, statusText: res2.statusText };
    } catch (error) {
      let messagetexto =
        error.statusText || "Usuario incorrecto o no registrado";
      const $mensaje = document.getElementById("mensaje");
      //$mensaje.textContent = messagetexto;
      console.log(error, $mensaje);
    }*/
  } 
});
/* function login() {
  var boton = document.getElementById("grabar");
  boton.addEventListener("click", itemnuevo, false);
}
 */
// en caso ingresa {"msg": "UserCorrecto"}
// en caso no ingresa {"msg": "UserIncorrecto"}
// levantar servidor con json-server -w -p 5000 assets/db.json
