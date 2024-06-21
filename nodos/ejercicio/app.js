import { data } from "./datos.js";

const $fragment = document.createDocumentFragment();
const $contenedor = document.querySelector(".container")
const $cards = document.createElement("div")
$contenedor.appendChild($cards)
$cards.classList.add("cards")



data.map(obj => {
  //Creacion de elementos de la card
  const $card = document.createElement("div")
  const $card_header = document.createElement("div")
  const $card_title = document.createElement("h2")
  const $card_body = document.createElement("div")
  const $card_img = document.createElement("img")
  const $card_paragraph = document.createElement("p")
  const $button = document.createElement("a")
  const $span = document.createElement("span")
  const $button_icon = document.createElement("i")

  $card.appendChild($card_header)
  $fragment.appendChild($card)
  $card_header.appendChild($card_title)
  $card.appendChild($card_body)
  $card_body.appendChild($card_img)
  $card_img.appendChild($card_paragraph)
  $card_img.appendChild($button)
  $button.appendChild($span)
  $span.appendChild($button_icon)


  $card_title.innerHTML = obj.title

  $card.classList.add("card")
  $cards.setAttribute("id", "cards")
  $card_header.classList.add("card__header")
  $card_title.classList.add("card__title")
  $card_body.classList.add("card__body")
  $card_img.src = obj.src
  $card_img.classList.add("card__img")
  $card_img.setAttribute("alt", "img")
  $card_paragraph.classList.add("card__paragraph")
  $card_paragraph.innerText = obj.paragraph
  
});

$cards.appendChild($fragment)