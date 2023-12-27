//the goal is to create a calculator that outputs the correct change
//the change needs to be defined in a way that can be iterated
let coinVal = [
    ['pennies', .01], 
    ['nickles', .05], 
    ['dimes', .10], 
    ['quarters', .25],
    ['dollars', 1.0]
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
// function handleClickEvent(){
//     let input = parseFloat(document.getElementById('amount-received').value);
//     let price = parseFloat(document.getElementById('amount-due').value);
//     let changes = calcChange(input, price, coinVal);
//     let coinsNeeded = calcCoin(changes, coinVal)
function handleClickEvent() {
    let input = parseFloat(document.getElementById('amount-received').value);
    let price = parseFloat(document.getElementById('amount-due').value);
    let changeDetails = calcChange(input, price, coinVal);
    console.log(changeDetails);

// document.querySelector('#output').innerHTML = JSON.stringify(coinsNeeded);
    document.getElementById('dollars-value').innerHTML = changeDetails[0][1]; 
    document.getElementById('quarters-value').innerHTML = changeDetails[1][1];
    document.getElementById('dimes-value').innerHTML = changeDetails[2][1];
    document.getElementById('nickels-value').innerHTML = changeDetails[3][1];
    document.getElementById('pennies-value').innerHTML = changeDetails[4][1];
}

document.querySelector('#calculate-change').addEventListener('click', handleClickEvent);