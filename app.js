//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let inputDeAmigos = document.getElementById('amigo');
let sorteioRealizado = false;

function adicionarAmigo() {
  if (sorteioRealizado) {
    reiniciarSorteio();
  }

  let novoAmigo = inputDeAmigos.value;

  if (novoAmigo) {
    listaDeAmigos.push(novoAmigo);
    inputDeAmigos.value = '';
    exibirListaDeAmigos(listaDeAmigos);
  } else {
    alert('Por favor, insira um nome.');
  }
}

function exibirAmigoSorteado(amigoSorteado) {
  let elemento = document.getElementById('resultado');
  elemento.innerHTML = '';
  let li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  elemento.appendChild(li);
}

// Dicidi adicionar os elementos individualmente na lista, de acordo com que são adicionados. Pois se fizesse um "for" como o descrito na tarefa do trello, para listar os elementos a cada nova adição, teria muita manipulação da DOM desnecessária.
function exibirListaDeAmigos(listaDeAmigos) {
  let elemento = document.getElementById('listaAmigos');

  let novoAmigo = listaDeAmigos[listaDeAmigos.length - 1];
  let li = document.createElement('li');
  li.textContent = novoAmigo;
  elemento.appendChild(li);
}

function sortearAmigo() {
  if (sorteioRealizado) {
    alert('Adicione amigos novamente, para realizar um novo sorteio.');
    return;
  } else if (listaDeAmigos.length === 0) {
    alert('Por favor, adicione amigos antes de sortear.');
    return;
  }

  let tamanhoDoArrayDeAmigos = listaDeAmigos.length;
  let indexDoAmigoSorteado = parseInt(Math.random() * tamanhoDoArrayDeAmigos);

  sorteioRealizado = true;
  exibirAmigoSorteado(listaDeAmigos[indexDoAmigoSorteado]);
  limparListaDeAmigos();
}

function limparListaDeAmigos() {
  listaDeAmigos = [];
  let elemento = document.getElementById('listaAmigos');
  elemento.innerHTML = '';
}

function reiniciarSorteio() {
  sorteioRealizado = false;
  let elemento = document.getElementById('resultado');
  elemento.innerHTML = '';
}
