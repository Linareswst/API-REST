const url = "http://localhost/demo_laravel/public/api/generos";
const txtNom = document.getElementById("inputNombreGen");
const txtDesc = document.getElementById("inputDescripcionGen");
const btnAdd = document.getElementById("btnAgg");

function redireccion(){
    window.location.replace("generos.html");
}

async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
  btnAdd.onclick=function(e){
    postData(url, {  nombre_genero: txtNom.value, descripcion: txtDesc.value  })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
      txtNom.value='';
      txtDesc.value='';
      localStorage.setItem("alerta","1");
      setTimeout('redireccion()',1000);
      
      
  }