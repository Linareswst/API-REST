let txtID = document.getElementById("inputIDEdi");
let txtCOD = document.getElementById("inputCodigoEdi");
let txtNOM = document.getElementById("inputNombreEdi");
let txtCONT = document.getElementById("inputContactoEdi");
let txtTEL = document.getElementById("inputTelefonoEdi")
let btnUpdt = document.getElementById("btnEdit");
let obtenerurl;

txtID.value=localStorage.getItem("idEditorial");

function redireccion(){
    window.location.replace("editoriales.html");
}

fetch(obtenerurl="http://localhost/demo_laravel/public/api/editoriales")
    .then(response=>response.json())
    .then(data=>data.forEach(editorial => {
        if(editorial.id==localStorage.getItem("idEditorial")){
                txtCOD.value =editorial.codigo_editorial;
                txtNOM.value = editorial.nombre_editorial;
                txtCONT.value = editorial.contacto;
                txtTEL.value = editorial.telefono;
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
    
      btnUpdt.onclick=function(e){
        putData("http://localhost/demo_laravel/public/api/editoriales", { id: txtID.value, codigo_editorial: txtCOD.value, nombre_editorial: txtNOM.value, contacto: txtCONT.value, telefono: txtTEL.value  })
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
        localStorage.setItem("alerta","3");
        setTimeout('redireccion()',1000);
      }
      