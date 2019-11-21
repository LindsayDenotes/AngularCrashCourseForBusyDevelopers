//25.Modules - we moved the Point Class here to point.ts
// added export keyword to make this class visible to the outside.
// sometimes each ts file is its own module.
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        //Print the value of this class's X and Y fields
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
