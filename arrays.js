const names = ['Kriss', 'Peru', 'Karamba'];
console.log(names);

// typof returns 'object'
console.log(typeof names);

// to check if sometching is an array
console.log(Array.isArray(names));

// lenght of array
console.log(names.length);

// last item
console.log(names[names.length - 1]);

// Mutation methods - do change the original data
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Example
// numbers.reverse();
console.log(numbers);

// Immutable methods - they do not change the original data
const pizzaSlice = numbers.slice(2, 4);
console.log(pizzaSlice);

// Anytime you want to use a mutation method and not mutate the original array  - take a copy of an array
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);
console.log(numbers);

// extending the array
const animals = ['cat', 'dog', 'parrot', 'turtle', 'hamster', 'bunny'];

// at the end - it mutate
animals.push('guinea pig');
console.log(animals);

//this doesn't mutate
const animalsExtended = [...animals, 'fish'];
console.log(animalsExtended);

// add at the front - mutate
animals.unshift('snake');
console.log(animals);

// this doesn't mutate
const animalsExtended2 = ['spider', ...animals];
console.log(animalsExtended2);