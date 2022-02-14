const buttonAddQuest = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOl = document.querySelector('#lista-tarefas');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonRemoveComplete = document.querySelector('#remover-finalizados');
const buttonSaveList = document.querySelector('#salvar-tarefas');
const buttonRemoveSelected = document.querySelector('#remover-selecionado');

function saveList() {
  localStorage.setItem('doList', listOl.innerHTML);
}

buttonAddQuest.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'tarefa';
  li.innerText = input.value;
  listOl.appendChild(li);
  input.value = '';
});

function changeColor(event) {
  const listLi = document.querySelectorAll('li');
  listLi.forEach((li) => li.style.backgroundColor = 'white');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completedClass(event) {
  const classLi = event.target.classList;
  const arrayClassLi = [...classLi];
  if (arrayClassLi.includes('completed')) {
    classLi.remove('completed');
  } else {
  event.target.className = 'tarefa completed';
  }
}

function clearAll() {
  listOl.innerHTML = '';
  saveList();
}

function removeComplete() {
  const listLi = document.querySelectorAll('li');
  listLi.forEach((li) => {
    const classLi = li.classList;
    const arrayClassLi = [...classLi];
    if (arrayClassLi.includes('completed')) {
      li.remove();
    }
  });
  saveList();
}

function removeSelected() {
  const listLi = document.querySelectorAll('li');
  listLi.forEach((li) => {
    const liSelected = li.style.backgroundColor;
    if (liSelected === 'rgb(128, 128, 128)') {
      li.remove();
    }
  });
}

listOl.addEventListener('click', changeColor);
listOl.addEventListener('dblclick', completedClass);
buttonClear.addEventListener('click', clearAll);
buttonRemoveComplete.addEventListener('click', removeComplete);
buttonSaveList.addEventListener('click', saveList);
buttonRemoveSelected.addEventListener('click', removeSelected);

function getSaveList() {
  const list = localStorage.getItem('doList');
  listOl.innerHTML = list;
}

window.onload = getSaveList;
