// creating function
function getReminder(){
    console.log("Water the plants.");
}
 
 function greetInSpanish(){
   console.log("Buenas tardes.");
}


// calling the function
getReminder();
greetInSpanish();

//passing value in functions
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
  
sayThanks('Cole');


function addition(num1, num2){
    console.log(num1 + num2, 'here is your additon');
}
  
addition(10, 11);


//default parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

  makeShoppingList();

//Helper functions
function monitorCount(rows, columns) {
    return rows * columns;
  }    
function costOfMonitors(rows, columns){
       return monitorCount(rows, columns) * 200;
}
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

//2.
function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
const result = getFahrenheit(15);
console.log(result);
const result2 = multiplyByNineFifths(5);
console.log(result2);

//function expression

const plantNeedsWater = function(day){
    if (day === 'Wednesday'){
      return true;
    }
    else{
      return false;
    }
  }
console.log(plantNeedsWater('Tuesday'))

//Concise Body Arrow Functions
const plantNeedsWater_ = (day) => (day === 'Wednesday' ? true : false);
console.log(plantNeedsWater_('Wednesday'))

function dream_car(theCar){
    theCar.make('supra');
}

const mycar ={
  make : 'mustang_mach-1',
  model : '1998-Mach-1',
  yearn: 1998,
}

const x = mycar.make;

dream_car(mycar);

const y = mycar.make;