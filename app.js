'use strict';
console.log('proof of life'); 

//global variables
var picOne = document.getElementById('dish1');
var picTwo = document.getElementById('dish2');
var picArray = [];

// display 2 images to the page 
// image ta has 3 properties 'src' 'title' and 'alt'

// picOne.src = './img/bag.jpg';
// picOne.title = 'Bag';
// picOne.alt = 'Bag';

// picTwo.src = './img/dog-duck.jpg';
// picTwo.title = 'Dog Duck';
// picTwo.alt = 'Dog Duck';

// make a constructor

function image (src, name,) {
    this.src = `../img/${src}.jpg`;
    this.title = name;
    this.alt = name;

    picArray.push(this); 
}

// create random function

// create image on page function
function createOnPage() {
new image ('bag', 'Bag');
new image ('bag', 'Bag');
new image ('bag', 'Bag');
}
createOnPage();

console.table(picArray);
// console.log(Math.random());