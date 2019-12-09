'use strict';
// console.log('proof of life'); 

//global variables
var picOne = document.getElementById('picture1');
var picTwo = document.getElementById('picture2');
var picThree = document.getElementById('picture3');
var picArray = [];
// container for my images
var picVote = document.getElementById('picVote');
var voteRounds = 20;
var pictureContainer = [picOne, picTwo, picThree];

// chart data
var chartContainer = document.getElementById('voteChart');
// global variables for chart data
var chartLabels = [];
var votesArray = [];
var viewsArray = [];
var chartColors = [];

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
        makeAChart();
        analysis();
    }
    voteRounds --;
    console.log(voteRounds)
}



// builds the list and and adds views & votes
function analysis() {
    var results = document.getElementById('resultsList');
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
// all my chart data
// push data into arrays and format for use
function makeChartData() {
    chartLabels = [];
    viewsArray = [];
    votesArray = [];
    chartColors = ['red', 'blue', 'green', 'orange', 'yellow', 'pink', 'salmon', 'deeppink', 'coral', 'violet', 'purple', 'lime', 'teal', 'darkseagreen','yellowgreen', 'aqua', 'aquamarine', 'powderblue', 'mediumslteblue', 'cornsilk', 'tan', 'rosybrown']
    
    // this pushes all the data into the arrays
    for(var i = 0; i < picArray.length; i ++) {
        chartLabels.push(picArray[i].title);
        viewsArray.push(picArray[i].viewed);
        votesArray.push(picArray[i].vote);
    }
    for(var j = 0; j < chartColors.length; j ++) {
        chartColors.push.randomIndex;
    }
}
// global variables for chart arrays

// create the chart
function makeAChart() {
    makeChartData();
    var ctx = document.getElementById('voteChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',
        
        // The data for our dataset
        data: {
            labels: chartLabels,
            datasets: [
                {
                    label: ['Votes'],
                    backgroundColor: chartColors,
                    borderColor: 'darkgrey',
                    data: votesArray
                },
                {
                    label: ['Views'],
                    backgroundColor: chartColors,
                    borderColor: 'rgb(34, 212, 40)',
                    data: viewsArray
                }
            ]
            
            
        },
        
        // Configuration options go here
        options: {
            title: {
                display:true,
                text: 'Voting results',
                fontSize:25,
            },
        }
    });
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
        var voteString = JSON.stringify(votesArray);
        localStorage.setItem('votes1', voteString);
        
        
        
        // console.log(picIndex);
        // console.log(Math.random());