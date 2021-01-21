const myName: string = 'Andrei';

const ten:number = 10;
const negative: number = -10;
const decimal: number = 10.1;

const yes: boolean = true;

const nothingHere: null = null;
const noDef: undefined = undefined;

let myName2 = 'andrei';
// TS will throw warning b/c of type inference
// myName2 = 10;
// no need to annotate myName2

// useful to annotate types if not initializing them
let myName3: string;

// ts will autofill `includes` or throw a warning is fn doesnt exist on string type
const sentence = 'this is a sentence';
sentence.includes('')

// no need to annotate return type b/c ts will infer it
const add = (a: number, b: number): number => a + b
// or
function add2(a: number, b: number): number {
  return a + b;
}
// or
const add3 = function(a: number, b: number): number {
  return a + b;
}

const post: { title: string, daysOld: number, published: boolean } = {
  title: 'title',
  daysOld: 10,
  published: true
};
//ts will show error for properties that dont exist
post.colour;

const printPost = (post: { title: string, daysOld: number }) => {
  return `${post.title}, ${post.daysOld} days old`;
}

// interface to annotate object
interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}
// applied
const printPost2 = (post: Post) => //...

class Car {
  // conventional TS
  // color: string;
  // year: number;

  // constructor(color: string, year: number) {
  //   this.color = color;
  //   this.year = year;
  // }

  // conventional angular ts
  color = 'red';
  year = 2000;

  drive() {
    console.log('driving')
  }
}

const myCar = new Car('red', 2000);
myCar.drive()

// public and private
class Car2 {
  // can be accessed outside of the class
  public color: string;
  // can only be accessed inside the class
  private year: number;

  // public and private can also apply to methods
  public drive() {
    console.log('driving')
  }

  private implementationDetail() {
    // cant call this outside the class
  }

  // can be applied in constructor directly
  constructor(public color: string, private year: number) {
    // dont need these lines if using public and private
    // this.color = color;
    // this.year = year;
  }
}

// decorators
@Component({})

// experimental within TS
// need to enable decorators in ts-config

const Component = (target: any) => {
  console.log(target);
};

@Component
class Car3 {
  @Component year: string;

  @Component
  drive(@Component speed: number) {

  }

  @Component
  get year {}
}

// decorators
// called when the file first gets executed, not when an instance of the class is created
// can be applied to a class, property, method, accessor, arg of method
// receives different args depending on where it gets used
// can be a plain decorator or a decorator factory
  // decorator factory has a set of parens and retuns a function
// used to mess around with internals of a class

// strict mode
// enforces properties to be initialized with a default value that matches the type
// turns warning into error when something has implicitly `any` type
// angular has strict of false typically

// applying interface to classes
interface Driveable {
  speed: number;
  drive(): string;
}

class Car {
  speed = 10;
  drive() {
    console.log(`driving at ${this.speed}`);
    // doesn't return a string
  }
}

class DriveableCar implements Driveable {
  // tells ts to check that class satisfies interface
  speed = 10;
  drive() {
    return `driving at ${this.speed}`;
    // returns a string
  }
}

// generics
class NumberHolder {
  value: number;
}
const numberHolder = new NumberHolder();
numberHolder.value = 10;

class StringHolder {
  value: string;
}
const stringHolder = new StringHolder();
stringHolder.value = 'hello';

// allows us to consolidate above classes by passing a type as an arg
class ValueHolder<TypeForValue> {
  value: TypeForValue;
}
const booleanHolder = new ValueHolder<boolean>();
booleanHolder.value = false;
// convention to use <T> as the variable name

// function generics
const numberWrapper = (value: number): number[] => {
  return [value];
}
// can be abstracted for difference types
// T is the type argument to the function
const valueWrapper = <T>(value: T): T[] => {
  return [value];
}
valueWrapper<number>(10);
valueWrapper<boolean>(true);
// can be inferred
valueWrapper(10);