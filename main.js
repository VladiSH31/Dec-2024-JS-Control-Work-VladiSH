// Структура

let mainDiv = document.getElementById('main-div');

let container = document.createElement('div');
container.classList.add('container');

let title = document.createElement('h1');
title.innerText = 'Name/Value Pair Sorter';

let inputSection = document.createElement('div');
inputSection.classList.add('input-section')

let nameValueInput = document.createElement('input');
nameValueInput.setAttribute('type', 'text');
nameValueInput.setAttribute('id', 'nameValueInput')
nameValueInput.setAttribute('placeholder', 'Enter Name=Value pair');

inputSection.append(nameValueInput)
container.append(title, inputSection);
mainDiv.appendChild(container);

// Функції