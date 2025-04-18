// Структура

let mainDiv = document.getElementById('main-div');

let container = document.createElement('div');
container.classList.add('container');

let title = document.createElement('h1');
title.innerText = 'Name/Value Pair Sorter';

// Інпут секція

let inputSection = document.createElement('div');
inputSection.classList.add('input-section')

let nameValueInput = document.createElement('input');
nameValueInput.setAttribute('type', 'text');
nameValueInput.setAttribute('id', 'nameValueInput')
nameValueInput.setAttribute('placeholder', 'Enter Name=Value pair');

let addButton = document.createElement('button');
addButton.setAttribute('id', 'addButton');
addButton.innerText = 'Add';

// Ліст енд баттон секція

let listSection = document.createElement('div');
listSection.classList.add('list-section')

let nameValueList = document.createElement('select');
nameValueList.setAttribute('id', 'nameValueList');


let buttonSection = document.createElement('div');
buttonSection.classList.add('button-section');

let sortByNameButton = document.createElement('button');
sortByNameButton.setAttribute('id', 'sortByNameButton');
sortByNameButton.innerText = 'Sort By Name'

let sortByValueButton = document.createElement('button');
sortByValueButton.setAttribute('id', 'sortByValueButton');
sortByValueButton.innerText = 'Sort By Value'

let deleteButton = document.createElement('button');
deleteButton.setAttribute('id', 'deleteButton')
deleteButton.innerText = 'Delete'

buttonSection.append(sortByNameButton, sortByValueButton, deleteButton)
listSection.append(nameValueList, buttonSection)
inputSection.append(nameValueInput, addButton)
container.append(title, inputSection, listSection);
mainDiv.appendChild(container);

// Функції

function validateNameValuePair(input) {
    return input.match(/^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/) !== null;
}
