//the goal is to create a calculator that outputs the correct change
//the change needs to be defined in a way that can be iterated
let coinVal = [
    ['pennies', .01], 
    ['nickles', .05], 
    ['dimes', .10], 
    ['quarters', .25],
    ['$1', 1.0],
    ['$2', 2.0],
    ['$5', 5.0],
    ['$10', 10.0],
    ['$20', 20.0]
]; 


// the obj needs to be iterated for a later function that used both key&value
// A for loop iterates and allows for a function to be completed after
function calcChange(input, price, coinVal){
    let changes = (input * 100) - (price * 100);
    let changeDetails = [];
    coinVal.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < coinVal.length; i++) {
        let coinType = coinVal[i][0];
        let coinValue = coinVal[i][1] * 100;
     if (changes >= coinValue) {
        let coinCount = Math.floor(changes / coinValue);
        changes -= coinCount * coinValue;
        changeDetails.push([coinType, coinCount]);
     }else{ 
        changeDetails.push([coinType, 0]);
     }  
}  
    return changeDetails;
}
function calcTotal (changeDetails) {
    let total = 0;
    for (let i = 0; i < changeDetails.length; i++) {
        total += changeDetails[i][1] * coinVal[i][1];
    }
    return total.toFixed(2);
}


function handleClickEvent() {
    let input = parseFloat(document.getElementById('amount-received').value);
    let price = parseFloat(document.getElementById('amount-due').value);
    let changeDetails = calcChange(input, price, coinVal);
    let totalChange = calcTotal(changeDetails);
    console.log(changeDetails);

// document.querySelector('#output').innerHTML = JSON.stringify(coinsNeeded);
    document.getElementById('20-dollars-value').innerHTML = changeDetails[0][1]
    document.getElementById('10-dollars-value').innerHTML = changeDetails[1][1]
    document.getElementById('5-dollars-value').innerHTML = changeDetails[2][1]
    document.getElementById('2-dollars-value').innerHTML = changeDetails[3][1]
    document.getElementById('dollars-value').innerHTML = changeDetails[4][1]; 
    document.getElementById('quarters-value').innerHTML = changeDetails[5][1];
    document.getElementById('dimes-value').innerHTML = changeDetails[6][1];
    document.getElementById('nickels-value').innerHTML = changeDetails[7][1];
    document.getElementById('pennies-value').innerHTML = changeDetails[8][1];
    document.getElementById('total-value').innerHTML = totalChange;
}

document.querySelector('#calculate-change').addEventListener('click', handleClickEvent);