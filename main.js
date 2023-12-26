//the goal is to create a calculator that outputs the correct change
//the change needs to be defined in a way that can be iterated
let coinVal = [
    ['pennies', 1], 
    ['nickles', 5], 
    ['dimes', 10], 
    ['quarters', 25]
]; 

var input = parseFloat(promt("Enter the amount of money recieved."));
var price = parseFloat(prompt("Enter the price to customer."));
//the obj needs to be iterated for a later function that used both key&value
//A for loop iterates and allows for a function to be completed after
function calcChange(input, price, coinVal){
    for (let i = 0; i < coinVal.length; i++){
        let coin=coinVal[i][1]
        if (input >= price){
            change = input % price;    
        }
        return change 
    }
    
}



