//the goal is to create a calculator that outputs the correct change
//the change needs to be defined in a way that can be iterated
let coinVal = [
    ['pennies', 1], 
    ['nickles', 5], 
    ['dimes', 10], 
    ['quarters', 25]
    ['dollars', 100]
]; 

var input = parseFloat(document.getElementById('Amount'));
var price = parseFloat(dicument.getElementById)('Price');
//the obj needs to be iterated for a later function that used both key&value
//A for loop iterates and allows for a function to be completed after
function calcChange(input, price, coinVal){
    for (let i = 0; i < coinVal.length; i++){
        let change=coinVal[i][1]
        if (input >= price){
            change = input % price;    
        }
        changes.push(change);

function calcCoin(changes, coinVal){
    let coinsNeeded= [];
            for (let i = 0; i < changes.length; i++) {
                let coinCount = Math.floor(changes[i] / coinVal[i][1]);
                coinsNeeded.push([coinVal[i][0]], coinCount);
            }
            return coinsNeeded;
    }
}
}