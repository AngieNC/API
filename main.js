let myForm = document.querySelector('form');
let myTabla = document.querySelector("#myData");
addEventListener("DOMContentLoaded",async()=>{
    let res = await(await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/Nomina")).json();
    for (let i = 0; i < res.length; i++){
        myTabla.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${res[i].id}</td>
            <td>${res[i].servicios}</td>
            <td>${res[i].telecomunicaciones}</td>
            <td>${res[i].comida}</td>
            <td>${res[i].ocio}</td>
            <td>${res[i].transporte}</td>
            <td>${res[i].seguros}</td>
            <td>${res[i].vivienda}</td>
            <td>${res[i].opciones}<input type="button" name="boton1" value="actualizar"><input type="button" name="botones" value="eliminar"></td>
        </tr>
    `);
    }
})

/*
myForm.addEvenListener('submit', async(e)=> {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const {cantidad} = data;
    data.cantidad = (typeof cantidad === "string") ? Number(cantidad): null;
    let config = {
        method: "POST",
        Headers:{"content-type": "application/json"},
        body: JSON.stringify(data)
    };
    let res = await (await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/Nomina", config)).json();
    
    console.log(res);


})*/