var assert = require('assert');

function Shape() {

    this.name = 'shape';
    this.color = 'red';

}

Shape.prototype.desc = function () {
    console.log(this.name);
}


function Circle() {

}

Circle.prototype = new Shape();

Circle.prototype.sayhi = function () {

}


var circle = new Circle();

circle.name = 'circle';

circle.desc();

console.log(circle.color);




console.log(circle.constructor.prototype.desc);

console.log(Array.constructor);
