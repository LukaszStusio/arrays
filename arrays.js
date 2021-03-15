console.log('it works?');

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

// adding inside
const bikes = ['Surly', 'Kona', 'Octane', 'Santa Cruz', 'Specialized', 'Canondale'];
const moreBikes = [
    ...bikes.slice(0, 2),
    'Trek',
    ...bikes.slice(3)
];
console.log(moreBikes);

// removing from inside
const lessBikes = [
    ...moreBikes.slice(0 ,3),
    ...moreBikes.slice(4)
];
console.log(lessBikes);

// objects in arrays
const comments = [
    {text: 'Cool', id: 1},
    {text: 'Awesome', id: 2},
    {text: 'Great', id: 3},
    {text: 'Super', id: 4}
];
// console.log(comments);

function deleteComment(id, postComments){
    // find the index of item in the array
    const commentIndex = postComments.findIndex(whichComment => whichComment.id === id);
    // make a new array without that item in it
    // return new array
    console.log('drukuj index: ' + commentIndex)
    return [
        ...postComments.slice(0, commentIndex),
        ...postComments.slice(commentIndex + 1)
    ];
};
console.log(deleteComment(3, comments));
console.log(comments)

// uncut example of finding index
const animalIndexUncut = animalsExtended2.findIndex(species => {
    if (species === 'turtle') {
        return true;
    } else {
        return false;
    }
});
console.log(animalIndexUncut);
console.log(animalsExtended2[animalIndexUncut]);

// now, the short version
const animalIndexShort = animalsExtended2.findIndex(species => species === 'turtle');
console.log(animalsExtended2[animalIndexShort]);

// cutting out turtle from the array
const animalsExtended2NoTurtle = [
    // get everything up to turtle index
    ...animalsExtended2.slice(0, animalIndexShort),
    // everything after turtle index
    ...animalsExtended2.slice(animalIndexShort + 1)
];
console.log(animalsExtended2NoTurtle);

// above also can be done with .flat() method at the end & without spread then
// const animalsExtended2NoTurtle = [
//     animalsExtended2.splice(0, animalIndexShort),
//     animalsExtended2.slice(animalIndexShort + 1)
// ].flat();
// console.log(animalsExtended2NoTurtle);