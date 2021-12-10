let getButton = document.querySelector('#criar-tarefa');
console.log(getButton);

let getList = document.querySelector('ol');
console.log(getList);

let getInput = document.querySelector('input');
console.log(getInput.value);

// função pra adicionar tarefas a lista
function adicionaTarefa () {
    let createLi = document.createElement('li');
    getList.appendChild(createLi);
    createLi.innerText = getInput.value;
    getInput.value = '';
    addClickList();
}

getButton.addEventListener('click', adicionaTarefa);


let getItemList = document.getElementsByTagName('li');
console.log(getItemList);

function changeBackgroudColor () {
    for (let i = 0; i < getItemList.length; i += 1) {
        getItemList[i].style.backgroundColor = 'rgb(128, 128, 128)';
        break;
    }
}

function addClickList () {
    for (let i = 0; i < getItemList.length; i += 1) {
    getItemList[i].addEventListener('click', changeBackgroudColor);
    }
}