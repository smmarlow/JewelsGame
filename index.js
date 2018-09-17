// populate a original random number

var randomNumber = Math.floor((Math.random() * 100) + 15);
console.log(randomNumber);

var wiNs
var lossEs
var min = [19];

var jeweL1 = Math.floor((Math.random() * 10) + min);
console.log(jeweL1);

var jeweL2 = Math.floor((Math.random() * 10) + min);
console.log(jeweL2);

var jeweL3 = Math.floor((Math.random() * 10) + min);
console.log(jeweL3);

var jeweL4 = Math.floor((Math.random() * 10) + min);
console.log(jeweL4);

var currentValue = 0;

var gameResults

// Create 4 stones will a potential assigned value
//STONES
//When the stones are selected, the value of the stones will be added to the guessed section
//-OR- If a stone sis nt selected after 10 seconds alert user to pick a stone

var guestSelection = 0;



//Once the guess value section is more than the original random number its considered a lost.


// Assign each stone a new random number
function update(number) {
    // update vatriable current value
    //update html based on passed in number
    console.log('cur val = ' + currentValue);
    console.log('nummbr is = ' + number);
    console.log('cur + num = ' + number + currentValue);

    currentValue = number + currentValue;

    $("#currentValue").html(currentValue);

    //define win or loss
    if (randomNumber = currentValue) {
        gameResults= "Win!";
        console.log("win");
        //Compare the original random number with the total of the claculted stones
    }
}   

 eles if (randomNumber< currentValue){
     gameResults= "Loss!"
}


{
    {




        // add loses based on your definition        
        console.log('this is a lose as a click of a button');
        console.log(randomNumber);
        console.log(currentValue);

    };
};

$("#randomNumber").html(randomNumber);


$("#jeweL1").on('click', function () {
    update(jeweL1);
});

$("#jeweL2").on('click', function () {
    update(jeweL2);
});

$("#jeweL3").on('click', function () {
    update(jeweL3);
});

$("#jeweL4").on('click', function () {
    update(jeweL4);
});

$("#win").on('click', function () {
    update(randomNumber);
});

//If the total caculation of the random stones is more than the original random number than its a loss




//LOSS
//loss if the total of the stones calculation is more than the original

//WIN
//win if the original random number = the total of the calcuted stones are picked 


//Guess
//calculate the total of the stones

