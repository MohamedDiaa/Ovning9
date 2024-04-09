const addBtn = document.getElementById("add");
const inputField = document.getElementById("inputText");
const itemsList = document.getElementById("itemsList");

var id = 0

function addAction() {

    id++;

    let value = inputField.value;

    console.log(value);
    itemsList.insertAdjacentHTML(`beforeend`,`<li id="item${id}">${value}</li><br>`);
 
    const item = document.getElementById(`item${id}`);
    item.addEventListener('click', itemClicked);
}


addBtn.addEventListener('click', addAction);

function itemClicked(item) {
    console.log("here cliicked");

}