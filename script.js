const buttonAddQuest = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOl = document.querySelector('#lista-tarefas');


buttonAddQuest.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'tarefa';
  li.innerText = input.value;
  listOl.appendChild(li);
  input.value = '';
});

function changeColor(event) {
  const listLi = document.querySelectorAll('li')
  listLi.forEach((li) => li.style.backgroundColor = 'white');
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

listOl.addEventListener('click', changeColor);