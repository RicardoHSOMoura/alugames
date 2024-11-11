function alterarStatus(item) {
  let gameClicado = document.getElementById(`game-${item}`);
  let imagem = gameClicado.querySelector('.dashboard__item__img');
  let botao = gameClicado.querySelector('.dashboard__item__button');

  if (imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
  } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
  }

  /*
  CÓDIGO FEITO POR MIM ANTES DE VER A RESOLUÇÃO OFICIAL

  let botao = document.getElementById(`ancora-${item}`);
  if (botao.classList.contains('dashboard__item__button--return')) {
    botao.innerText = "Alugar";
    botao.classList.remove('dashboard__item__button--return');
  } else {
    botao.innerText = "Devolver";
    botao.classList.add('dashboard__item__button--return');
  }

  let img = document.getElementById(`img-${item}`)
  if (img.classList.contains('dashboard__item__img--rented')) {
    img.classList.remove('dashboard__item__img--rented')
  } else {
    img.classList.add('dashboard__item__img--rented')
  }
  */
  
}