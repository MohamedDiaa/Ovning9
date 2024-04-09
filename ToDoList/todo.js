const addBtn = document.getElementById("add");
const inputField = document.getElementById("inputText");
const containerDiv = document.getElementById("divContainer");

var id = 1

function addAction() {

    let value = inputField.value;

    console.log(value);
    containerDiv.append(`<p>${value}</p>`);

}


addBtn.addEventListener('click', addAction);