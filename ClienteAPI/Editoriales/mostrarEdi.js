const url="http://localhost/demo_laravel/public/api/editoriales";
const tabla=document.querySelector('.bg-light');
let html='';

fetch(url)
.then(response=>response.json())
.then(data=>data.forEach(editorial => {
    const tr=document.getElementById('cuerpo');
    html+=`<tr><td>${editorial.id}</td><td>${editorial.codigo_editorial}</td><td>${editorial.nombre_editorial}</td><td>${editorial.contacto}</td><td>${editorial.telefono}</td><td><div class='row'><div class='col-lg-6'><button type='button' class='btn-edit btn btn-success' value='${editorial.id}' id='btnEdit'>Editar</button></div><div class='col-lg-6'><button type='button' class='btn-elim btn btn-danger' value='${editorial.id}' id='btnElim'>Eliminar</button></div></div></td></tr>`;
    tr.innerHTML= html;
}))
.catch(error=>console.error("error",error))
.then(response=>console.log("success",response));