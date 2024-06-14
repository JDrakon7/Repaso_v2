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


