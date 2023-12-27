//the goal is to create a calculator that outputs the correct change
//the change needs to be defined in a way that can be iterated
let coinVal = [
    ['pennies', .01], 
    ['nickles', .05], 
    ['dimes', .10], 
    ['quarters', .25],
    ['dollars', 1.0]
]; 


//the obj needs to be iterated for a later function that used both key&value
//A for loop iterates and allows for a function to be completed after
function calcChange(input, price, coinVal){
    let changes = [];
    for (let i = 0; i < coinVal.length; i++){
        let change=coinVal[i][1]
        if (input >= price){
            change = input % price;    
        }
        changes.push(change);
    }
     return changes;   
    }
function calcCoin(changes, coinVal) {
    let coinsNeeded= [];
    for (let i = 0; i < changes.length; i++) {
        let coinCount = Math.floor(changes[i] / coinVal[i][1]);
        coinsNeeded.push([coinVal[i][0], coinCount]);
    }
   return coinsNeeded;
}  
function handleClickEvent(){
    let input = parseFloat(document.getElementById('amount-received').value);
    let price = parseFloat(document.getElementById('amount-due').value);
    let changes = calcChange(input, price, coinVal);
    let coinsNeeded = calcCoin(changes, coinVal)
// document.querySelector('#output').innerHTML = JSON.stringify(coinsNeeded);
document.getElementById('dollars-value').innerHTML = coinsNeeded[4][1]; // Assuming 'dollars' is the last element in coinVal
    document.getElementById('quarters-value').innerHTML = coinsNeeded[3][1];
    document.getElementById('dimes-value').innerHTML = coinsNeeded[2][1];
    document.getElementById('nickels-value').innerHTML = coinsNeeded[1][1];
    document.getElementById('pennies-value').innerHTML = coinsNeeded[0][1];
}
document.querySelector('#calculate-change').addEventListener('click', handleClickEvent);