# Javascript Examples

🎉 Playground for testing and experimenting with the Javascript language, API's, ...

## 

### Spread operator - `...`

#### Object Spread - `...`

When the spread operator is used in combination with objects. 
E.g. object `john` is spread and copies all it's properties into the `jane` object. `firstName` and `sex` are overwritten.

```
const john = {
    firstName: 'John',
    lastName: 'Doe',
    sex: 'Male',
    country: 'Belgium'
}

const jane = {
    ...john, // <-- here we 'spread' John's properties into Jane's
    firstName: 'Jane',
    sex: 'Female'
}
```

#### Array Spread - `...`

When the spread operator is used with arrays. It spreads it's indexes and values. 
This can result in having arrays with duplicate values!  

```
const evenNumbers = [2, 4, 6, 8];
const allNumbers = [ ...evenNumbers, 1, 3, 5, 7];

// result: [2, 4, 6, 8, 1, 3, 5, 7]
```

```
const randomNumbers = [1, 7, 2, 8];
const allNumbers = [ ...evenNumbers, 1, 3, 5, 7];

// result: [1, 7, 2, 8, 1, 3, 5, 7]
// Note that numbers can have duplicates!
```

#### Rest Parameter - `...`

Rest parameters: [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Allows to create a function that can take an indefinite number of arguments. Also called functions of variable arity or variadic functions 😎.

```
function maximumOf(...numbers) {
    
    // Gives the number of arguments passed on
    const length = numbers.length; 
    
}

// allows for indefinite arguments 
maximumOf(1);
maximumOf(1, 5, 2);
```

### Arguments object - `arguments`

Arguments: [developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

An Array-like object accessible inside functions that contains the values of the arguments passed to that function.

To convert the arguments into an array, use:  
`Array.prototype.slice.call(arguments)`

```
function maximumOf() {
    
    // Convert the arguments into a real array if needed
    const numbersArray = Array.prototype.slice.call(arguments); 
    
}

// allows for indefinite arguments 
maximumOf(1);
maximumOf(1, 5, 2);
```