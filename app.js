'use strict';
console.log('proof of life'); 

//global variables
var picOne = document.getElementById('dish1');
var picTwo = document.getElementById('dish2');
var picThree = document.getElementById('dish3');
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

// create random helper function
// random number function from MDN 
function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
   var indexOne = randomIndex(picArray.length);
   picOne.src = picArray[indexOne].src;
   picOne.title = picArray[indexOne].title;
   picOne.alt = picArray[indexOne].alt 

   var indexTwo = randomIndex(picArray.length);

   picTwo.src = picArray[indexTwo].src;
   picTwo.title = picArray[indexTwo].title;
   picTwo.alt = picArray[indexTwo].alt;

   var indexThree = randomIndex(picArray.length);

   
   console.log(indexOne, indexTwo, indexThree);
}

// create image on page function
function createOnPage() {
new image ('bag', 'Bag');
new image ('bag', 'Bag');
new image ('bag', 'Bag');
}
createOnPage();
generateImages();

console.table(picArray);
// console.log(Math.random());