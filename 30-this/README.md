## Object Oriented JavaScript: `this`

### `this` and the function execution context
- in the browser vs. in node

### JS `this` vs Ruby `self`
- the value of `this` changes depending on which object the function is invoked from
- implied `this` for all functions calls

### Quick Aside: Strict Mode
- undeclared variables not allowed
- `this` inside a function is undefined

### `this` has strange behavior inside object methods
- this is always determined by the object to the left of the '.'
- inside arrow functions, `this` takes on the value of the outer scope's `this`

### `bind` `call` `apply`

- bind returns a new function
- can't rebind a function
- how to see if a function has been bound
- bind a function that has arguments
 - binding both `this` and certain arguments

- call and apply invoke the function right away
- apply is same as call except it take an in array of arguments
