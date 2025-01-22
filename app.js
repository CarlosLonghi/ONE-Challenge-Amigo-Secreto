//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let inputDeAmigos = document.getElementById('amigo');

function adicionarAmigo() {
  let novoAmigo = inputDeAmigos.value;

  if (novoAmigo) {
    listaDeAmigos.push(novoAmigo);
    inputDeAmigos.value = '';
    exibirListaDeAmigos('listaAmigos', listaDeAmigos);
  } else {
    alert('Por favor, digite o nome de um amigo para adicioná-lo!');
  }
}

function exibirAmigoSorteado(idDoElemento, amigoSorteado) {
  let elemento = document.getElementById(idDoElemento);
  elemento.innerHTML = '';
  let li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  elemento.appendChild(li);
}

function exibirListaDeAmigos(idDoElemento, listaDeAmigos) {
  let elemento = document.getElementById(idDoElemento);

  let novoAmigo = listaDeAmigos[listaDeAmigos.length - 1];
  let li = document.createElement('li');
  li.textContent = novoAmigo;
  elemento.appendChild(li);
}

function sortearAmigo() {
  let tamanhoDoArrayDeAmigos = listaDeAmigos.length;
  let indexDoAmigoSorteado = parseInt(Math.random() * tamanhoDoArrayDeAmigos);

  limparListaDeAmigos();
  exibirAmigoSorteado('resultado', listaDeAmigos[indexDoAmigoSorteado]);
}

function limparListaDeAmigos() {
  let elemento = document.getElementById('listaAmigos');
  elemento.innerHTML = '';
}
