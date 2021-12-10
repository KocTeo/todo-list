let getButton = document.querySelector('#criar-tarefa');
console.log(getButton);

let getList = document.querySelector('ol');
console.log(getList);

let getInput = document.querySelector('input');
console.log(getInput.value);



function adicionaTarefa () {
    let createLi = document.createElement('li');
    getList.appendChild(createLi);
    createLi.innerText = getInput.value;
    getInput.value = '';

}

getButton.addEventListener('click', adicionaTarefa)