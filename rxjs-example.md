## Example using vanilla JS

HTML

```html
<input />
```

JS

```js
const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  let text = event.target.value;

  text = parseInt(text);

  if (isNaN(text)) {
    throw new Error("you must enter a number");
  }

  logValue(value);
});

const logValue = (value) => console.log(`Your value is ${value}`);
```

## Terminology

Observable: something that emits events over time (source of events)

Operators: something that takes in a value, transforms it and passes it onto the next operator or processing step

- each function (operator) has a specific process
- commonly chained together
- generic or specific operators

Pipe: group of operators (pipeline)

Observer: Result of pipeline. Handling of errors or values out of pipeline.

## Example using RxJS

```js
// get input visible on screen
const input = document.createElement("input");
const container = document.querySelector(".container");
container.appendChild(input);

//rxjs
const { fromEvent } = Rx;
const { map } = RxOperators;
// or with import syntax

const observable = fromEvent(input, "input").pipe(
  map((event) => event.target.value),
  map((value) => console.log(value))
);
```
