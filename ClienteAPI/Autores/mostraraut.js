const url="http://localhost/demo_laravel/public/api/autores";
const tabla=document.querySelector('.bg-light');
let html='';

fetch(url)
.then(response=>response.json())
.then(data=>data.forEach(autor => {
    const tr=document.getElementById('cuerpo');
    html+=`<tr><td>${autor.id}</td><td>${autor.codigo_autor}</td><td>${autor.nombre_autor}</td><td>${autor.nacionalidad}</td><td><div class='row'><div class='col-lg-6'><button type='button' class='btn-edit btn btn-success' value='${autor.id}' id='btnEdit'>Editar</button></div><div class='col-lg-6'><button type='button' class='btn-elim btn btn-danger' value='${autor.id}' id='btnElim'>Eliminar</button></div></div></td></tr>`;
    tr.innerHTML= html;
}))
.catch(error=>console.error("error",error))
.then(response=>console.log("success",response));