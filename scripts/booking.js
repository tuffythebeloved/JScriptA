/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dailyRate = 35;
let dayCount = 0;

let calculatedCost = document.getElementById("calculated-cost");

let mon = document.getElementById("monday");
let tues = document.getElementById("tuesday");
let wed = document.getElementById("wednesday");
let thurs = document.getElementById("thursday");
let fri = document.getElementById("friday");

let full = document.getElementById("full");
let half = document.getElementById("half");

let dayClear = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mon.addEventListener("click", function(){ dayClicked(mon);});
tues.addEventListener("click", function(){ dayClicked(tues);});
wed.addEventListener("click", function(){ dayClicked(wed);});
thurs.addEventListener("click", function(){ dayClicked(thurs);});
fri.addEventListener("click", function(){ dayClicked(fri);});

function dayClicked(day) {
    if(!day.classList.contains("clicked")){
        day.classList.add("clicked");
        dayCount += 1;
        calculation();
    }
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
dayClear.addEventListener("click", clearDays);

function clearDays(){
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thurs.classList.remove("clicked");
    fri.classList.remove("clicked");


    dayCount = 0;
    dailyRate = 35;
    calculatedCost.innerHTML = "0";
    half.classList.remove("clicked");
    full.classList.add("clicked");
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click", halfClicked);

function halfClicked() {
    if(!half.classList.contains("clicked")) {
        dailyRate = 20;
        half.classList.add("clicked");
        full.classList.remove("clicked");
        calculation();
    }
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", fullClicked);

function fullClicked() {
    if(!full.classList.contains("clicked")) {
        dailyRate = 35;
        full.classList.add("clicked");
        half.classList.remove("clicked");
        calculation();
    }
}
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation() {
    let cost = dailyRate * dayCount;

    calculatedCost.innerHTML = String(cost);
}

