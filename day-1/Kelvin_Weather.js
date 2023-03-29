// declare a variable name kelvin and assign value 293 
const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees celsius`)

//  declare a variable name celsius and assign value by sub kelvin with 273
let celsius;
celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees celsius`)

//  declare a variable name fahrenheit and assign value by following function fahrenheit = celsius*(9/5)+32; and round it's value
let fahrenheit;
fahrenheit = celsius*(9/5)+32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton;
newton = celsius*(33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees newton.`);