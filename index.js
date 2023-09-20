let myForm = document.querySelector("form");
console.log(myForm)
let myTabla = document.querySelector("#myData");
addEventListener("DOMContentLoaded",async()=>{
    let res = await(await fetch("https://6509e7ebf6553137159c3aee.mockapi.io/Nomina")).json();
    for (let i = 0; i < res.length; i++){
        myTabla.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${res[i].id}</td>
            <td>${res[i].cantidad}</td>
        </tr>
    `);
    }
})