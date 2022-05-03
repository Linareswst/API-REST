const url="http://localhost/demo_laravel/public/api/generos";
const tabla=document.querySelector('.bg-light');
let html='';

fetch(url)
.then(response=>response.json())
.then(data=>data.forEach(genero => {
    const tr=document.getElementById('cuerpo');
    html+=`<tr><td>${genero.id}</td><td>${genero.nombre_genero}</td><td>${genero.descripcion}</td><td><div class='row'><div class='col-lg-6'><button type='button' class='btn-edit btn btn-success' value='${genero.id}' id='btnEdit'>Editar</button></div><div class='col-lg-6'><button type='button' class='btn-elim btn btn-danger' value='${genero.id}' id='btnElim'>Eliminar</button></div></div></td></tr>`;
    tr.innerHTML= html;
}))
.catch(error=>console.error("error",error))
.then(response=>console.log("success",response));