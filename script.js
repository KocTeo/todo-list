const buttonAddQuest = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOl = document.querySelector('#lista-tarefas');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonRemoveComplete = document.querySelector('#remover-finalizados');

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
}

listOl.addEventListener('click', changeColor);
listOl.addEventListener('dblclick', completedClass);
buttonClear.addEventListener('click', clearAll);
buttonRemoveComplete.addEventListener('click', removeComplete);
