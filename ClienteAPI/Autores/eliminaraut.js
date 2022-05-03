let btnEliminar;
let eliminarurl;

let btnEditar;

//CODIGO BTN EDITAR
function retraso2(){
    btnEditar = document.querySelectorAll('.btn-edit');
    for(let i=0; i<btnEditar.length; i++){
      btnEditar[i].addEventListener('click', function(){
        localStorage.setItem("idAutor",btnEditar[i].value);
        window.location.replace("editarAutor.html")
  
        })
        
      }
    
  }

  setTimeout('retraso2()',5000);

//CODIGO BTN ELIMINAR
function retraso(){
    btnEliminar = document.querySelectorAll('.btn-elim');
    for(let i=0; i<btnEliminar.length; i++){
      btnEliminar[i].addEventListener('click', function(){
        if(confirm(`Seguro que quiere borrar el id= ${btnEliminar[i].value }?`)){
            
        deleteData(eliminarurl=`http://localhost/demo_laravel/public/api/autores/${btnEliminar[i].value}`, {})
        .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        });
        localStorage.setItem("alerta","2");
        setTimeout('redireccion()',1000);
        }
        })
    }
  }
  
  setTimeout('retraso()',5000);

  function redireccion(){
    window.location.replace("autores.html");
}

async function deleteData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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