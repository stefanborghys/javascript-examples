# Javascript Examples

🎉 Playground for testing and experimenting with the Javascript language, API's, ...

## Syntax

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
Note: this can result in having arrays with duplicate values!  

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

Note: The `rest parameters` are real arrays! While the `arguments object` is NOT!!!

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

## Web API's

### Document

The Document interface represents any web page loaded in the browser.

Document: [developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

#### Document`.querySelector()`

Returns the FIRST Element within the document that matches the specified selector or group of selectors.

`.querySelector()`: [developer.mozilla.org/en-US/docs/Web/API/Document/querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

Locating DOM elements using selectors: [developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)

CSS selectors: [developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

```
// By class
document.querySelector('.classname'); 

// By id
// E.g. single id:
document.querySelector('#idname'); 

// E.g. multiple ids:
document.querySelector('#idname1, #idname2, #idname3'); 

// By element name
document.querySelector('p'); 

// By attribute
// E.g. all elements that have the 'hidden' attribute:
document.querySelector('[hidden]'); 

// E.g. all elements that have the 'maximum' attribute set to 5:
document.querySelector('[maximum=5]'); 

// Combined
// E.g. app 'p' elements whose CSS class is 'warning' or 'note':
document.querySelector('p.warning, p.note');



```

### Element

Represents an element in a Document.

Element: [developer.mozilla.org/en-US/docs/Web/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

#### Element`.setAttribute()`

`.setAttribute()`: [developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

```
const button = document.querySelector("button");

button.setAttribute("name", "helloButton"); // set the attribute 'name' to 'helloButton'
button.setAttribute("disabled", ""); // set the attribute 'disabled' to true

```

#### `MutationObserver()`

Watch for changes made to the DOM tree.

MutationObserver: [developer.mozilla.org/en-US/docs/Web/API/MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)