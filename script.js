let i = 0;

const getButtonAdd = document.querySelector('#criar-tarefa');
console.log(getButtonAdd);

const getList = document.querySelector('ol');
console.log(getList);

const getInput = document.querySelector('input');
console.log(getInput.value);

// função pra adicionar tarefas a lista
function adicionaTarefa() {
  const createLi = document.createElement('li');
  getList.appendChild(createLi);
  createLi.innerText = getInput.value;
  getInput.value = '';
  createLi.className = 'item';
  addClickList();
}

getButtonAdd.addEventListener('click', adicionaTarefa);

const getItemList = document.getElementsByTagName('li');
console.log(getItemList);


// função pra adicionar evento click em todos os elementos da lista
function addClickList() {
  for (i = 0; i < getItemList.length; i += 1) {
    getItemList[i].addEventListener('click', addClassSelect);
    getItemList[i].addEventListener('dblclick', tarefaCompleta);
  }
}

// função pra mudar o fundo do elemento clicado
function addClassSelect(event) {
 // trecho de código inspirado no código de Tomas Breuckmann
  if (classSelect.length == 0) {
    event.target.classList.add('select')
  } else {
    document.querySelector('.select').classList.remove('select')
    event.target.classList.add('select')
  }
  // *******************************************************
  for(i = 0; i < itens.length; i += 1){
    itens[i].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}
let itens = document.getElementsByClassName('item')
let classSelect = document.getElementsByClassName('select');


// função pra limpar todo os itens da lista
function clearAll() {
  for (i = getItemList.length - 1; i >= 0; i -= 1){
    getList.lastChild.remove();
  }
}

const getButtonClear = document.querySelector('#apaga-tudo');
console.log(getButtonClear);

getButtonClear.addEventListener('click', clearAll);

// função riscar item completo
function tarefaCompleta (event) {
  // código feito na mesma inspiração da função de selecionar o item
  if (event.target.classList.contains('completed')===true) {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = 'none';
  } else {
  event.target.classList.add('completed');
  event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}

let listaFeitos = document.getElementsByClassName('completed');
let buttonClearComplete = document.getElementById('remover-finalizados');
buttonClearComplete.addEventListener('click', clearComplete);

// função remover completos
function clearComplete() {
  for (i = listaFeitos.length - 1; i >= 0; i -= 1){
    // acessar o elemento pai e remover o elemento filho
    listaFeitos[i].parentElement.removeChild(listaFeitos[i]);
  }
}

let buttonApagaSelect = document.getElementById('remover-selecionado');
buttonApagaSelect.addEventListener('click', clearSelect);

// remover selecionado
function clearSelect () {
  classSelect[0].parentElement.removeChild(classSelect[0]);
}