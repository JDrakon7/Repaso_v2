import { comentarios } from "./modulo.js";

const $root = document.querySelector("#root"); //acceder a su id con #
const $plantilla = document.querySelector('#plantilla').content; //acceder a su id con #
const $fragmento = document.createDocumentFragment()

console.log($plantilla)



comentarios().then((lista) => {

  lista.forEach(comentario => {
    $plantilla.querySelector("div > h2").textContent = comentario.name;
    $plantilla.querySelector("div > h2 > p").textContent = comentario.email;
    $plantilla.querySelector("div > h2 > p").textContent = comentario.body;
    
    $plantilla.querySelector("div").classlist.add("root")

    const $clon = document.importNode($plantilla, true)
    $fragmento.appendChild($clon)
  });
  $root.appendChild($fragmento)
  
})



// // let respuesta = comentarios();
// comentarios().then((lista) => {
//   // console.log(lista)
//   lista.forEach(comentarios => {

//     const $div = document.createElement("div")
//     const $h2 = document.createElement("h2")
//     const $p1 = document.createElement("p")
//     const $p2 = document.createElement("p")

//     $h2.textContent = comentarios.name;
//     $p1.textContent = comentarios.email;
//     $p2.textContent = comentarios.body;

//     $div.appendChild($h2);
//     $div.appendChild($p1);
//     $div.appendChild($p2);

//     $root.appendChild($div)

//   });

//   $root.appendChild($fragmento)
// });












// se usa map para Ordenar y recorrer arrays