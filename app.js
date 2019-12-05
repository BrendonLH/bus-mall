'use strict';
// console.log('proof of life'); 

//global variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var picArray = [];
// container for my images
var picVote = document.getElementById('picVote');
var voteRounds = 5;
var pictureContainer = [picOne, picTwo, picThree];
var chartContainer = document.getElementById('voteChart');

// make a constructor
function image (src, name) {
    this.src = `../img/${src}.jpg`;
    this.title = name;
    this.alt = name;
    this.viewed = 0;
    this.vote = 0;
    
    picArray.push(this); 
}
// hide function
function hide (elem) {
    elem.style.display = 'none';
}

// create random helper function/ event handler
function clickVote() {
    var select = event.target.title;
    for(var i = 0; i < picArray.length; i++) {
        if(select === picArray[i].title) {
            picArray[i].vote ++;
        }
    }
    console.table(picArray);
    generateImages();
    console.table(picArray);
    if( voteRounds === 0) {
        hide(picVote);
        analysis();
        makeAChart();
    }
    voteRounds --;
    console.log(voteRounds)
}



// builds the list and and adds views & votes
function analysis() {
    var results = document.getElementById('list');
    var ulEl = document.createElement('ul');
    for(var i = 0; i < picArray.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${picArray[i].title} : ${picArray[i].vote} Votes & ${picArray[i].viewed} views`
        ulEl.appendChild(liEl);
    }
    resultsList.appendChild(ulEl);
}

// random number function from MDN 
function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {
    var currentImages = [];
    for(var i = 0; i < pictureContainer.length; i ++) {
        var currentIndex = randomIndex(picArray.length);
        while(currentImages.includes(currentIndex)) {
            currentIndex = randomIndex(picArray.length);
        }
        currentImages.push(currentIndex);
        pictureContainer[i].src = picArray[currentIndex].src;
        pictureContainer[i].title = picArray[currentIndex].title;
        pictureContainer[i].alt = picArray[currentIndex].alt 
        picArray[currentIndex].viewed ++;
    }
}

// picOne.src = picArray[indexOne].src;
    // picOne.title = picArray[indexOne].title;
    // picOne.alt = picArray[indexOne].alt 
    // picArray[indexOne].viewed ++;
    
    // var indexTwo = randomIndex(picArray.length);
    // while(indexTwo === indexOne) {
        //     indexTwo = randomIndex(picArray.length);
        // }
        
        // picTwo.src = picArray[indexTwo].src;
    // picTwo.title = picArray[indexTwo].title;
    // picTwo.alt = picArray[indexTwo].alt;
    // picArray[indexTwo].viewed ++;
    // // picIndex.push(indexTwo);
    
    // var indexThree = randomIndex(picArray.length);
    
    // while(indexThree === indexTwo || indexThree === indexOne) {
        //     indexThree = randomIndex(picArray.length); 
        // }
        
        // picThree.src = picArray[indexThree].src
        // picThree.title = picArray[indexThree].title
        // picThree.alt = picArray[indexThree].alt
        // picArray[indexThree].viewed ++;
        // console.log(indexOne, indexTwo, indexThree);
        // picIndex.push(indexOne, indexTwo, indexThree);   
        
        // create the chart
        function makeAChart() {
            var ctx = document.getElementById('voteChart').getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'pie',
        
                // The data for our dataset
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45]
                    }]
                },
        
                // Configuration options go here
                options: {}
            });
        }
        // create image on page function
        function createOnPage() {
            new image ('bag', 'Bag');
            new image ('banana', 'Banana');
            new image ('boots', 'Boots');
            new image ('bathroom', 'Bathroom');
            new image ('boots', 'Boots');
            new image ('breakfast', 'Breakfast');
            new image ('bubblegum', 'BubbleGum');
            new image ('chair', 'Chair');
            new image ('cthulhu', 'Cthulhu');
            new image ('dog-duck', 'Dog Duck');
            new image ('dragon', 'Dragon');
            new image ('pen', 'Pen');
            new image ('pet-sweep', 'Pet Sweep');
            new image ('scissors', 'Scissors');
            new image ('shark', 'Shark');
            new image ('sweep', 'Sweep');
            new image ('tauntaun', 'TaunTaun');
            new image ('unicorn', 'Unicorn');
            new image ('usb', 'USB');
            new image ('water-can', 'Water Can');
            new image ('wine-glass', 'Wine Glass');
        }
        createOnPage();
        generateImages();
        console.table(picArray);
        picVote.addEventListener('click', clickVote)
        
        // console.log(picIndex);
        // console.log(Math.random());