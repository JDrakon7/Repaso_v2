import { post } from "./module.js";

const $root = document.querySelector("#root")

const $form = document.createElement("form")
const $input = document.createElement("input")
const $btn = document.createElement("button")
const $section = document.createElement("section")

$form.appendChild($input)
$form.appendChild($btn)
$form.appendChild($section)


$btn.textContent= "Solicitar Nuevo"
$btn.setAttribute("type", "submit")
$input.setAttribute("type", "text")

$root.appendChild($form)
$root.appendChild($section)

const agregarpost = (event) => {
  event.preventDefault();
  if ($input.value === "") {
    alert("Este espacio no puede quedar vacio");
  }
}

$form.addEventListener("submit",agregarpost)
$btn.addEventListener("click", agregarpost)
$input.addEventListener("keypress", function (event) {
  if (event.key < "0" || event.key > "9") {
    event.preventDefault();
    alert("Error Solo se permiten números");
  }
});


$form.addEventListener("submit", agregarpost);


const agregar = (() => { 
  const id = $input.value
  post(id)
    .then(post => {
    const $div = document.createElement("div")
    const $h2 = document.createElement("h2")
    const $p = document.createElement("p")
   
    $div.textContent= post.id
    $h2.textContent = post.title
    $p.textContent = post.body
    $div.appendChild($h2)
    $div.appendChild($p)

    // $root.appendChild($div)
    $root.insertAdjacentElement('afterbegin', $div);
    
  }).catch
  
})
$btn.addEventListener("click" || "enter",agregar)

// const agregar = () => {
//   let id = parseInt(prompt("Seleccione el ID"))
//  post(id)
//    .then((respuesta) => {
    
//     console.log(respuesta)
//     $div.textContent = respuesta
    
//   }) 
//   .catch()

// }

