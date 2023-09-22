
// Se declaran las constantes para trabajar con los formularios y la base de datos
const formulario = document.querySelector("#formAdd");
const formu = document.querySelector("#formEdit");
const dialog = document.querySelector("dialog");
const url = "https://6509e7ebf6553137159c3aee.mockapi.io/Nomina";


//Para que funcione el metodo eliminar

const principalEliminar = async(id)=>{
    let config = {
        method: "DELETE",
        headers: {"content-type":"application/json"}
    };
    let res = await (await fetch(url + "/" + id, config)).json();

};

// Para que funcione el metodo editar

const principalEditar = async(id)=>{
    formu.addEventListener('submit', (e)=>{
        e.preventDefault();
        let dato = Object.fromEntries(new FormData(e.target));

        let config = {
            method: "PUT",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(dato)
        };
        let res = fetch(url + "/" + id, config);

        dialog.close();
    })
}

//Todo esto es el evento que se desarrolla después de presionar 'ENVIAR'

formulario.addEventListener("submit", async(e)=>{
    e.preventDefault();
    
    let dato = Object.fromEntries(new FormData(e.target));
    
    const peticion = await (await fetch(url)).json();

    let config = {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(dato)
    }

    const enviar = await (await fetch(url, config)).json();
    
    location.reload();
});

// Descarga todo el contenido como el HTML o los estilos 

document.addEventListener("DOMContentLoaded", async(e)=>{
    const tabla = document.querySelector('#data-tabla');
    let res = await (await fetch(url)).json();
    
    //Crea un nuevo array y manipula el array que recorre.
    res.map((elemento)=>{
        tabla.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${elemento.id}</td>
            <td>${elemento.valor}</td>
            <td>${elemento.caja}</td>
            <td>
                <button id="${elemento.id}" class="edit">Editar</button>
                <button id="${elemento.id}" class="delet">Eliminar</button>
            </td>
        </tr>
        `)
    });

    const eliminar = document.querySelector('.delet');
    
    const editar = document.querySelector('.edit');
    
    //Evento eliminar
    eliminar.forEach((elemento) =>{
        elemento.addEventListener("click",()=>{
            // console.log(typeof element.id)
            principalEliminar(elemento.id);
        })
    });

    //Evento editar

    editar.forEach((elemento)=>{
        elemento.addEventListener("click",(event)=>{
            dialog.showModal();
            principalEditar(elemento.id);
        })
    });
});