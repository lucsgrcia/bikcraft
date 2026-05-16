// Ativar links menu
const links = document.querySelectorAll(".header-menu li a");

function ativarLink(link) {
  const url = window.location.href;
  const hrf = link.href;

  if (url.includes(hrf)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parameters = new URLSearchParams(location.search);

function ativarProduto(parameter) {
  const element = document.getElementById(parameter);

  if (element) {
    element.checked = true;
  }
}

parameters.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const container = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    const img = event.currentTarget;
    container.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
