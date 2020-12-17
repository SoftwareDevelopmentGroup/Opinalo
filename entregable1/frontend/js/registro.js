const d = document,
  $form = d.querySelector(".formulario"),
  $fragment = d.createDocumentFragment(),
  $edad = d.getElementById("edad");

// levantar servidor con json-server -w -p 5000 assets/db.json
// evento cambiar rango de edad

/* edad.addEventListener("change",()=>{
  let salida = d.getElementById("rango");
  salida.innerHTML=edad.value;
},false)
 */


d.addEventListener("submit", async (e) => {
  console.log(e);
  if (e.target === $form) {
    e.preventDefault();
    console.log(e.target.nombre);
    console.log(e.target.email);
    location.href = "./login.html";
    /*
    if (!e.target.id.value) {
      // Create-POST
      try {
        let options = {
            method: "GET",
            headers: {
              host: "telechambac19.herokuapp.com",
              origin: "/registro.html",
            },
          },
          res = await fetch(
            `https://telechambac19.herokuapp.com/register?usr=${e.target.email.value}&pas=${e.target.password.value}&nombre=${e.target.nombre.value}&apellido=${e.target.apellido.value}`,
            options
          ),
          json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        if (json["msg"] === "user exist") {
          alert("este usuario ya existe");
          console.log(json_id[`$oid`]);
        } else {
          location.href = "/login.html";
        }
      } catch (error) {
        let message = error.statusText || "Ocurrio un error";
        console.log(message, error);
      }
    } else {
      //Update-PUT
    } */
  }
});
