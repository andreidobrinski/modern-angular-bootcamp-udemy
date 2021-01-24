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

## Multicast vs Unicast Observables

Unicast

```js
const { Observable } = Rx;
const { tap } = RxOperators;

const observable = new Observable((subscriber) => {
  // throw the value 1 into our pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  // marks the observable as complete. no more values will come out
  subscriber.complete();

  // emit an error. no more values will come out
  subscriber.error(new Error("asdf"));
}).pipe(tap((value) => console.log(value)));

observable.subscribe((value) => console.log("from first subscribe", value));

observable.subscribe((value) => console.log("from second subscribe", value));
```

Unicast

- emit a **separate set of values for each observer that subscribes**
- all of the operators in a pipe will be executed for each separate observer that subscribes
- can easily lead to bad behaviour

Multicast

- emit a **single set of values for all observers that subscribe**
- all of the operators in a pipe are executed just once
- the observable will be reset if it gets completed or errored, then another subscriber is added
- issues with a later subscriber not seeing earlier events

Multicast

```js
const { Observable } = Rx;
const { tap, share } = RxOperators;

const observable = new Observable((subscriber) => {
  // throw the value 1 into our pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  // marks the observable as complete. no more values will come out
  subscriber.complete();

  // emit an error. no more values will come out
  subscriber.error(new Error("asdf"));
}).pipe(
  tap((value) => console.log(value)),
  share()
);

observable.subscribe((value) => console.log("from first subscribe", value));

observable.subscribe((value) => console.log("from second subscribe", value));
```

## Hot vs Cold Observables
