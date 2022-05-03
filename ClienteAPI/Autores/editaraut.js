let txtID1 = document.getElementById("inputIDAut");
let txtCOD1 = document.getElementById("inputCodigoAut");
let txtNOM1 = document.getElementById("inputNombreAut");
let txtNAC1 = document.getElementById("inputNacionalidadAut");
let btnUpdt1 = document.getElementById("btnEditar");
let obtenerurl;

txtID1.value=localStorage.getItem("idAutor");

function redireccion(){
    window.location.replace("autores.html");
}

fetch(obtenerurl="http://localhost/demo_laravel/public/api/autores")
    .then(response=>response.json())
    .then(data=>data.forEach(autor => {
        if(autor.id==localStorage.getItem("idAutor")){
                txtCOD1.value = autor.codigo_autor;
                txtNOM1.value = autor.nombre_autor;
                txtNAC1.value = autor.nacionalidad;
            }
                
    }))
    .catch(error=>console.error("error",error))
    .then(response=>console.log("success",response));

    async function putData(url = '', data = {}) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(url, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }
    
      btnUpdt1.onclick=function(e){
        putData("http://localhost/demo_laravel/public/api/autores", { id: txtID1.value, codigo_autor: txtCOD1.value, nombre_autor: txtNOM1.value, nacionalidad: txtNAC1.value })
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
        localStorage.setItem("alerta","3");
        setTimeout('redireccion()',1000);
      }