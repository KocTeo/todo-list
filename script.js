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
  for (i = 0; i < getItemList.length; i += 0){
    getList.lastChild.remove();
  }
}

const getButtonClear = document.querySelector('#apaga-tudo');
console.log(getButtonClear);

getButtonClear.addEventListener('click', clearAll);
