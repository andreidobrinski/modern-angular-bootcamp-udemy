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