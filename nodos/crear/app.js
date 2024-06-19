import { datos } from "./datos.js"
// Identificar elemento
const $padre = document.querySelector(".container")

//Crear nodo
const nodo = document.createElement("p")
const nodo2 = document.createElement("p")

const texto = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque aut unde excepturi veritatis inventore quaerat non sunt, repellat enim eius mollitia possimus nemo perferendis illo sapiente delectus ex deserunt odio?`

nodo.innerText = texto
nodo2.innerText = texto
$padre.appendChild(nodo)
$padre.appendChild(nodo2)

const $lista = document.querySelector('div.container > div.card > ul.list')
console.log($lista)

console.log(datos)

datos.map(a => {
  const nombres = document.createElement("li")
  nombres.textContent = a.name
  $lista.className="item"
  $lista.appendChild(nombres)

})