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
  addClickList();
}

getButtonAdd.addEventListener('click', adicionaTarefa);

const getItemList = document.getElementsByTagName('li');
console.log(getItemList);

// função pra mudar o fundo do elemento clicado
function changeBackgroudColor(event) {
  for (i = 0; i > getItemList.length; i += 1) {
    if (getItemList[i].style.backgroundColor !== 'white') {
      (getItemList[i].style.backgroundColor = 'white');
    }
  }
    event.target.style.backgroundColor = 'rgb(128, 128, 128';
}

// função pra adicionar evento click em todos os elementos da lista
function addClickList() {
  for (i = 0; i < getItemList.length; i += 1) {
    getItemList[i].addEventListener('click', changeBackgroudColor);
  }
}

// função pra limpar todo os itens da lista
function clearAll() {
  for (i = 0; i < getItemList.length; i += 0){
    getList.lastChild.remove();
  }
}

const getButtonClear = document.querySelector('#apaga-tudo');
console.log(getButtonClear);

getButtonClear.addEventListener('click', clearAll);
