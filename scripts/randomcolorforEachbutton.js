'use strict';
let header = document.querySelector('h1');
header.textContent = 'Random Color for Each Button';
header.style.textAlign = 'center';

let containerClass = document.querySelector('.container');
containerClass.style.width = "100%";
containerClass.style.textAlign = "center";
containerClass.style.border = "2px solid black";
containerClass.style.padding = "5px";

let createInputText = document.createElement('input');
createInputText.type = 'text';
createInputText.label = 'Enter a number';
containerClass.appendChild(createInputText);

let createButton = document.createElement('button');
createButton.textContent = "Submit";
createButton.type = "number";
containerClass.appendChild(createButton);

let createClearButton = document.createElement('button');
createClearButton.textContent = "Clear";
createClearButton.type = "reset";
containerClass.appendChild(createClearButton);

let addLineBreak = document.createElement('br');
containerClass.appendChild(addLineBreak);

createButton.addEventListener('click', function () {
    let randomButtonNum = Number(createInputText.value);
    const rgbValue = () => {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;
        return `rgb(${r},${g},${b})`;
    }

    for (let i = 0; i <= randomButtonNum; i++) {
        let button = document.createElement('button');
        let rgb = rgbValue();
        button.textContent = `I am ${rgb}`;
        button.textAlign = "center";
        button.style.height = "50px";
        button.style.width = "150px";
        button.style.backgroundColor = rgb;
        button.style.borderRadius = "3px";
        containerClass.appendChild(button);
    }
});

createClearButton.addEventListener('click', clear);
function clear() {
    containerClass.removeChild();
}

