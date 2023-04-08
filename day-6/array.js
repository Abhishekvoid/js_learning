// create an array
const hobbies = ['Music', 'traveling', 'reading']
console.log(hobbies)

// accessing array elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);

//updating elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments = ['Mayo']
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[utensils.length - 1] = 'Spoon';


condiments[0] = 'Mayo';
console.log(condiments);
console.log(condiments);
console.log(utensils);

//push method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('wash clothes', 'make dinner');
console.log(chores);

//pop method
const choreS = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop('mop floor');
console.log(choreS);

//other methods
const GroceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

GroceryList.shift();
console.log(GroceryList);

GroceryList.unshift('popcorn');
console.log(GroceryList);

console.log(GroceryList.slice(1, 4));
console.log(GroceryList);

const pastaIndex = GroceryList.indexOf('pasta');
console.log(pastaIndex);