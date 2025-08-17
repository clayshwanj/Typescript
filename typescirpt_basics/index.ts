//Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
//Starting with initialization only
let age: number;

age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

//Tuple-allows you to specify the exact types in the array
let person: [number, string, boolean] = [1, "Brad", true];
//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Union-alllows variables to hold more than one type(string, number,boolean)
let pid: string | number = 22;

//Enum
enum Direction1 {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}
console.log(Direction1.Up);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Down);

//Objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "Madonna",
};
//Type assertion-explicitly tells the compiler that we are treating an entity as a different type
let cid: any = 1;

let customerId = <number>cid;
// alt
// let customerId = cid as number

//Function
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2));

//You may not have a return value so use a void
//Void
function log(message: string | number): void {
  console.log(message);
}
//Pass a string ,number or boolean
log(1);

//Interfaces
interface UserInterface {
  readonly id: number; // readonly if no new values are to be assigned to a key
  name: string;
  age?: number; //?makes it optional
}
const user1: UserInterface = {
  id: 2,
  name: "Sade",
};

//Using an interface & a function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//type can be used with primitives but not intefaces eg:
type Point = number | string;
const p1: Point = 1;

//Classes
class Person {
  private id: number; //private or protected allows access only withn the class
  name: string;
  //A constructor is a method so that can have properties and methods which are just functions within a class.
  //Runs when an object is instantiated from a class
  //   constructor() {
  //     console.log(123); //instantiate or initialize objects in this case brad
  //   }

  //To assign an id and number to the name
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name}is now registered`;
  }
}
const brad = new Person(1, "Brad Traversy");

console.log(brad.register());

console.log(brad);

//Using interface
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  register() {
    return `${this.name}is now registered`;
  }
}
const mosh = new Person1(1, "Moshi Hamedani");
console.log(mosh);

//Extending classes
//Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn ", "Developer");
console.log(emp.register()); //register is not in the subclass but can be used because it was in the class

//Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "Kenny", "Dolly"]);
numArray.push("Hello");

//T is genreic
// function getArray<T>(items: T[]): T[] {
//   return new Array().concat(items);
// }
// let numArray = getArray<number>([1, 2, 3, 4]);
// let strArray = getArray<string>(["Brad", "Kenny", "Dolly"]);
// strArray.push('Hello');
