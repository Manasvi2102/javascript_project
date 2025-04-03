// => Add Items to Array
// Write a JavaScript program to add items to a blank array and display them.
// Sample Screen :
// add elements in an blank array
// input box: __________
// add button
// display buttonr
let array = []

let input = document.getElementById('text');
function add() {
    let itm = text.value.trim();
    if (itm) {
        array.push(text.value);
        text.value = " ";
    }else{
        alert('please enter a valid values')
    }
}

function display() {
    document.getElementById('p').innerText = "Array values : " + array.join();
}


