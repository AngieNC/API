
let myfrom = document.querySelector("form");
let myTabla = document.querySelector("#myData");

//Se llaman los datos
addEventListener("DOMContentLoaded",async()=>{
    let res=await(await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/Nomina")).json();
    for (let i = 0; i< res.length; i++){
        myTabla.insertAdjacentHTML("beforeend", `
      <tr>
      <td>${res[i].id}</td>
      <td>${res[i].valor}</td>
      <td>${res[i].caja}</td>
      </tr>
      `);
    
    }
})

//Se crean los datos
async function creacion(data) {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    let res = await (await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/Nomina", config)).json();
    return res;
}

// Agregar evento para crear un nuevo registro
myfrom.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const { valor } = data;
    data.valor = (typeof valor === "string") ? Number(valor) : null;
  
    try {
      let createdData = await creacion(data);
      console.log("Registro creado:", createdData);
    } catch (error) {
      console.error("Error al crear el registro:", error);
    }
});

//Se cargan los datos
async function cargar() {
    try {
      let data = await fetchData();
      for (let i = 0; i < data.length; i++) {
        myTabla.insertAdjacentHTML("beforeend", `
          <tr>
            <td>${data[i].id}</td>
            <td>${data[i].valor}</td>
            <td>${data[i].caja}</td>
            <td>
              <button class="btn-edit" data-id="${data[i].id}">Editar</button>
              <button class="btn-delete" data-id="${data[i].id}">Eliminar</button>
            </td>
          </tr>
        `)};
      
    }catch (error) {
        console.error("Error al crear el registro:", error);
    }
}


// Llamar a la función para cargar datos al iniciar la página y ellos se agregan al final
cargar();