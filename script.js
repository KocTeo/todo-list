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
  addClickList();
}

getButtonAdd.addEventListener('click', adicionaTarefa);

const getItemList = document.getElementsByTagName('li');
console.log(getItemList);

// função pra mudar o fundo do elemento clicado
function changeBackgroudColor() {
  for (let i = 0; i < getItemList.length; i += 1) {
    getItemList[i].style.backgroundColor = 'rgb(128, 128, 128)';
    break;
  }
}

// função pra adicionar evento click em todos os elementos da lista
function addClickList() {
  for (let i = 0; i < getItemList.length; i += 1) {
    getItemList[i].addEventListener('click', changeBackgroudColor);
  }
}

// função pra limpar todo os itens da lista
function clearAll() {
  for (let i = 0; i < getItemList.length; i += 0){
    getList.lastChild.remove();
  }
}

const getButtonClear = document.querySelector('#apaga-tudo');
console.log(getButtonClear);

getButtonClear.addEventListener('click', clearAll);
