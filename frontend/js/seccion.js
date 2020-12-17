const datos =[
    {id: 0, titulo : "pregunta 0",votantes : "10", num_cambios : 0 },
    {id: 1,titulo : "pregunta 1",votantes : "11", num_cambios : 1 },
    {id: 2,titulo : "pregunta 2",votantes : "12", num_cambios : 2 },
    {id: 3,titulo : "pregunta 3",votantes : "13", num_cambios : 3 },
    {id: 4,titulo : "pregunta 4",votantes : "14", num_cambios : 4 },
];
const usuarios =[
    {id:0 , nombre : "renzo"},
    {id:1 , nombre : "renato"}
]
const malas_palabras ={

}
const user_on ={id:0, nombre:"renzo"};
const d=document,
$preguntas = d.querySelector('.preguntas'),
$template = d.getElementById('template-pregunta').content,
$fragmento = d.createDocumentFragment(),
$form_mensaje =d.getElementById('form-mensaje');

const getAllPreguntas = async () => {
    datos.forEach(( element )=>{
        //console.log(element);
        $template.querySelector('form').setAttribute('class',`form-pregunta${element.id}`)
        $template.querySelector('form').dataset.id =element.id;
        $template.getElementById('titulo-pregunta').innerHTML=element.titulo;
        $template.querySelector('.contenedor-contador').dataset.id = element.id;
        $template.querySelector('.button').dataset.id = element.id;
        $template.querySelector('.contenedor-contador').innerHTML = element.num_cambios;
        let $clone = d.importNode($template,true);
        $fragmento.appendChild($clone);
    })
    $preguntas.appendChild($fragmento);
}

d.addEventListener("submit",async (e)=>{
    /* console.log(e.target.dataset.id); */
    console.log(e.target);
    let $contador = e.target.querySelector('.contenedor-contador');
    let $form = d.querySelector(`.form-pregunta${e.target.dataset.id}`);
    //console.log($form)
    console.log($form_mensaje)
    
    if(e.target === $form){
            e.preventDefault();
            console.log($contador.textContent)
            if($contador.textContent>0){
                console.log(e.target.opcion.value)
                console.log("enviar respuesta")
                $contador.innerHTML=$contador.textContent-1

            }else{
                alert("ya no se puede cambiar de respuesta")
            }
    }else if(e.target == $form_mensaje){
        // para el chat 
        e.preventDefault();
        const $chat = d.getElementById('chat');
        const $mensaje = e.target.mensaje;
        console.log($chat)
        console.log($mensaje)
        $chat.innerHTML += `${user_on.nombre} : ${$mensaje.value} <br>`;
        $mensaje.value='';   
        $chat.scroll(0,1000000);    
    } 
});


const $template_usuarios = d.getElementById("template-usuario").content,
$fragment_usuarios =d.createDocumentFragment();

const $contenedor_usuarios = d.getElementById("usuarios");

const getAllUsers = async()=>{
    usuarios.forEach( (element)=>{
        $template_usuarios.querySelector("h1").textContent=element.nombre;
        $template_usuarios.querySelector("button").dataset.id = element.id;
        let $clone = d.importNode($template_usuarios,true);
        $fragment_usuarios.appendChild($clone);
    })
    $contenedor_usuarios.appendChild($fragment_usuarios);
} 

const getAll= async ()=>{
    getAllUsers();
    getAllPreguntas();

}

 
function reportar(props) {
    console.log(props.dataset.id);
    //Guardar el id
    const mensaje = confirm("Desea reportar al usuario ?");
    if(mensaje){
        window.open('reportar.html')
    }
     
} 


d.addEventListener("DOMContentLoaded", getAll);

