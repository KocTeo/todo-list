const buttonAddQuest = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listOl = document.querySelector('#lista-tarefas');
const liTarefa = document.getElementsByClassName('tarefa');

buttonAddQuest.addEventListener('click', () => {
  const li = document.createElement('li');
  li.className = 'tarefa';
  li.innerText = input.value;
  listOl.appendChild(li);
  input.value = '';
});

console.log(liTarefa);
