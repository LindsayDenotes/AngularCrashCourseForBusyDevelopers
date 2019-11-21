// To run each of these exercises, in Terminal, tsc main.ts && node main.js





// function log(message){
//     console.log(message);
// }

// var message = 'hello world';

// log(message);





// var number = 1;
// let count = 2;

// function doSomething(){
//     for (let i=0; i<5; i++) { // define a for block in es5 using var.
//         console.log(i);
//     }
//     console.log('Finally: ' + i); // in es5 JS, a var is scoped to the nearest function
//     // but if we switch to let keyword, then var is scoped to the nearest block. 
// }

// doSomething();





// //Define an enum.
// let a: number;
// let b: boolean;
// let c: string;
// let d: any; // object of type any
// let e: number[] = [1,2,3]; // array of numbers initialized to 3 vals
// let f: any[] = [1, true, 'a', false]; // array of any. stupid but possible.

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red=0, Green=1, Blue=2, Purple=3 };

// let backgroundColor = Color.Red; //Intellisense prompts you with your options from the enum.





// //16.Type Assertions
// // endsWith is a TypeScript method that can be called on a string. So it is a string method.
// let message;
// message = 'abc';
// // ways to tell TypeScript compiler that message is not an object of type any
// // ~ its like inline styling.
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');





// //17.Arrow Functions
// // a JS function
// let log = function(message){
//     console.log(message);
// }

// // an es2015, i.e., a TypeScript arrow function
// // let bsLog = (message) => {
// //     // the code block.
// // }

// // if the code block is one line, delete the curly braces
// let esLog = (message) => console.log(message);

// // if there's only one param like the above, you can remove the parans but then its hard to quickly see what the param is. less readable.





// //18.Interfaces
// // are for declarations. They cannot include implementations.
// // yet, you can declare a function in an interface but pass it no params. so, that is the signature of the function.
// // drawPoint object - for avoiding repeating an object literal in multiple places
// // drawPoint object - to encapsulate properties into one object

// // defines a shape of an object
// interface Point {
//     x: number,
//     y: number
// }

// // // this object literal is verbose...
// // let drawPoint =(point: {x:number, y: number})=>{
// //     // ...
// // }

// // ...so use interface defined at top of file.
// let drawPoint = (point: Point) => {
//     // ...
// }

// drawPoint({
//     x:1,
//     y:2
// })





// //19.Class, per OOP
// // use Pascal naming convention to name a class. Cap first letter of every word.
// // The problem with using an interface as in the above is it breaks OOP's rule "cohesion."
// // a class groups variables (properties) and functions (methods) that are highly related into a unit.

// // This class defines a shape of an object. Has 3 members,
// // 2 are fields, 1 is a method, b/c when a func is in a class, its a method.
// class Point {
//     x: number;
//     y: number;
//     draw(){
//         //...
//     }

//     getDistance(another: Point) {
//         //...logic goes in the function's code block, er, or statement block
//     }
// }

// // But we don't call the method from within the class or class file. See next video.
// X drawPoint({
//     x:1,
//     y:2
//  })





// //20.Objects
// // define an object of a custom type
// // Point is our custom type
// class Point {
//     x: number;
//     y: number;
    
//     draw(){
//         //Print the value of this class's X and Y fields
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }

//     getDistance(another: Point) {
//         //...logic goes in the function's code block, er, or statement block
//     }
// }

// // Declare a variable of this type, i.e., class. Below is the object, ie, an instance of the class.
// //X let point: Point; //this results in a type error bc you didn't initialize it with the new keyword. a type error in the console is a runtime error (not a compile time error)
// let point = new Point();
// //set the fields' values
// point.x = 1;
// point.y = 2;
// //call the draw method on the custom object.
// point.draw();





// //21.Constructors
// class Point {
//     x: number;
//     y: number;

//     constructor(x: number, y: number){
//         this.x=x;
//         this.y=y;
//     }
    
//     draw(){
//         //Print the value of this class's X and Y fields
//         console.log('X: ' + this.x + ', Y: ' + this.y)
//     }

// }
// // You must set the values to match the constructor's params when you create a new instance of a class, unless the constructor has optional params, which would look like x?: number, y?:number. You could then leave out the initial values in the line below.
// let point = new Point(1,2);

// //call the draw method on the custom object.
// point.draw();





//22.Access Modifiers
// Putting private in front of a member (field or methof) or property makes it accessible only within the same class.
// public keyword not needed because it is default.





// //23.Access Modifiers in Constructor Params
// // a truncation
// // public keyword IS needed if its public.

// class Point {
//     constructor(public x?: number, private y?: number){
//     }
//     draw(){
//         //Print the value of this class's X and Y fields
//         //console.log('X: ' + this.x + ', Y: ' + this.y)
//     }
// }

// let point = new Point(1,2);
// point.draw();





//24.Properties
// looks like a field from outside of the class, but its a method inside the class. Examples below: get and set.
// to avoid name collision with getter and setter, prefix field names in the params with an underscore.
// VS shortcut to rename a var is select + F2

// class Point {
//     constructor(private _x?: number, private _y?: number){
//     }
//     draw(){
//         //Print the value of this class's X and Y fields
//         console.log('X: ' + this._x + ', Y: ' + this._y);
//     }
//     // So we devs can see the logged value of x, but the user needs to see it on the UI. SO...
//     get x(){
//         return this._x;
//     }

//     //option to allow user to set a new value but only if its in a certain range
//     set x(value){
//         if (value<0)
//         throw new Error('Value cannot be less than 0');
//         // otherwise
//         this._x = value;
//     }

// }

// let point = new Point(1,2);
// // option for user to set new value for x  ~I don't get where 10 could have come from.
// //THEN...
// let x = point.x;
// point.x = 10;
// point.draw();






// //25.Modules - we moved the Point class definition to point.ts
// // to use it in main.ts...
// // import key word { Type } from 'relative path to module';  leave off the file extension
// import { Point } from './point'; 
// // if importing multiple Types, separate them with commas. 
// // Types can be Classes, functions, variables, objects.

// let point = new Point(1,2);
// point.draw();






//26.LikeExerciseLB
import {LikeLb} from './likeLb';//should have been named //likeLbComponent
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

let like = new LikeLb(10,true);
like.onClick();
console.log(`numLikes: ${like.numLikes}, isOn: ${like.isOn}`);

/* 
If after running 'tsc main.ts' you get the following error in the Terminal,

likeLb.ts:15:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

then you need to run the tsc command with the following flag:
tsc *.ts --target ES5 && node.js

*/


/* 30.Components
a file is not a component without:
1) a plain TS class (name the class with Pascal casing - cap every word, with suffix Component),
2) the import of Component decorator from @angular/core library, and 
3) @Component decorator - a function that applies the decorator onto the class. pass it metadata object with a selector. 
    Name of selector often matches name of file.


    ctrl `  - opens VS Code Terminal
    com b   - opens the files (Explorer) panel

    import { } <-- in curly braces goes the name of decorator, interface, class

*/



/* 31.Generating Components Using Angular CLI
Steps to make a component
1) Create the component using ng g c blah (or create new file under src->app in VS Code Explorer pane)
2) Register the name of the class in a module, in @NgModule decorator's declarations array. Import should be automatic if you use Auto Import plugin in VSCode.
3) Add an element in an HTML markup
*/

/* 32. Templates
In template double curly braces, you can put a field name plus a string in double quotes.
Angular will do string interpolation on whatever (er, expression) you type in.
*/

/* 33. Directives
used to add, remove, change class of elements on the DOM.
prefix any directive with an asterisk if it modifies the structure of the DOM.
*/

/*

*/








