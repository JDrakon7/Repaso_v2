let win = window
let dom = document
let body = dom.body
let form = dom.forms

let divs = dom.querySelectorAll('div')
let div = dom.querySelector('div')
let poridnuevo = dom.querySelector('#documento')
let porclase = dom.querySelector('container')
let div_porclases= dom.querySelector('container')
let porid = dom.getElementById('documento')
let atributo = dom.getElementsByName('search')
let oldclass = dom.getElementsByClassName('input')
let captura_ul_li = dom.querySelectorAll('ul.list > li.item')


let mayuscula = dom.getElementById('api')

console.log(mayuscula)

console.log(win)
console.log(dom)
console.log(dom.doctype)
// console.log(body)
console.log(dom.head)
// console.log(dom.body.children)
// console.log(dom.body.children[2])
console.log(divs)
console.log(div)
console.log(form)
console.log('formularios', form)
console.log('links', dom.links)
console.log('images', dom.images)
console.log("por id", porid)
console.log("por id", porid)
console.log("por clase", porclase)
console.log("por clases", div_porclases)
console.log("por atributo", atributo)
console.log("por old class", oldclass)
console.log("por ul y li ",captura_ul_li)

console.log(body.childNodes)
const elemento = body.firstElementChild
console.log(elemento.childNodes)
const padre = dom.querySelector('main')
console.log(padre.previousElementSibling)

console.log(body.parentElement)


// const listaA = [...body.children]
// console.log(listaA)


// body.children.map((x) => {
//   console.log(x)
// })


//ejercicio

const $padres = dom.getElementById("cards")
console.log($padres.children)


//etiquetas impares otro BG

const nuevo = [...$padres.children]

// let prueba = padres.children

// let e = [...prueba]
// const nuevo = [prueba]

// nuevo.map((a, i) => {
//   if (i % 2 !== 0 ) {
//   a.classList.toggle("bg-white")
//   }

// });


const $formulario = dom.getElementById('search')
$formulario.setAttribute("accept", "multipart/form-data")

const $input = dom.querySelector(".search__form > .search") //selector 
// $input.setAttribute("autocomplete" ,"off")
console.log($input)



//custom propertys CSS

const $html = dom.documentElement
console.log($html)


// const $element = getComputedStyle($html).getPropertyValues("---mineshaft: #343434")
// const $white = getComputedStyle($html).getPropertyValue("---white")

// $white.style.setproperty("--$element , #ffff")
// $html.style.setProperty("")

const $parrafo = dom.querySelector("#elementos")

// $parrafo.textContent = `Lorem ipsum <br>dolor<br> sit, amet consectetur adipisicing elit. Neque sed sit velit similique quo libero cum hic iste, quos quaerat accusamus laborum praesentium soluta aliquid quam corrupti rem dolor fugit!`

$parrafo.innerHTML = `Parrafo ipsum <br>dolor<br> sit, amet consectetur adipisicing elit. Neque sed sit velit similique quo libero cum hic iste, quos quaerat accusamus laborum praesentium soluta aliquid quam corrupti rem dolor fugit!`