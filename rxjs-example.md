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

Operator groups

- Transform: take in a value, do some processing, return a new value
- Filtering: modifies the flow of events in a pipe (group them together, pause them, delete them)
- Creation: creates a new observable. An operator that returns an observable (fromEvent)

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
const { map, pluck } = RxOperators;
// or with import syntax

const observable = fromEvent(input, "input").pipe(
  pluck("target", "value"),
  map((value) => parseInt(value)),
  map((value) => {
    if (isNaN(value)) {
      throw new Error("Enter a number");
    }
    return value;
  })
);

observable.subscribe({
  next(value) {
    console.log(`Your value is ${value}`);
  },
  error(err) {
    console.error("Error", err.message);
  },
});
```

Low level observable

```js
const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  // throw the value 1 into our pipeline
  subscriber.next(1);

  // marks the observable as complete. no more values will come out
  subscriber.complete();

  // emit an error. no more values will come out
  subscriber.error(new Error("asdf"));
}).pipe();

observable.subscribe({
  next(value) {
    console.log("got a value", value);
  },
  complete() {
    console.log("observable is complete, no more values");
  },
  error(err) {
    console.log("error", err.message);
  },
});

// alternate observer syntax
observable.subscribe(
  (value) => console.log("next thing", value),
  // second and third arguments are optional since the focus is on next()
  (err) => console.error("error", err.message),
  () => console.log("complete")
);
```
