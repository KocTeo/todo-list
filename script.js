let getButtonAdd = document.querySelector('#criar-tarefa');
console.log(getButtonAdd);

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

getButtonAdd.addEventListener('click', adicionaTarefa);


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

function clearAll () {
    for (let i = 0; i < getItemList.length; i += 0){
        getList.firstChild.remove();
    }
}

let getButtonClear = document.querySelector('#apaga-tudo');
console.log(getButtonClear);

getButtonClear.addEventListener('click', clearAll);