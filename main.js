let myFrom = document.querySelector("form");
let myTabla = document.querySelector("#myData");
addEventListener("DOMContentLoaded",async()=>{
    let res = await(await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/API")).json();
    for (let i = 0; i < res.length; i++){
        myTabla.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${res[i].id}</td>
            <td>${res[i].cantidad}</td>
        </tr>
    `);
    }
})

myFrom.addEvenListener('submit', async(e)=> {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    const {cantidad} = data;
    data.cantidad = (typeof cantidad === "string") ? Number(cantidad): null;
    let config = {
        method: "POST",
        Headers:{"content-type": "application/json"},
        body: JSON.stringify(data)
    };
    let res = await (await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/API", config)).json();
    
    console.log(res);


})