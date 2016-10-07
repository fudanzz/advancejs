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



for (arrt in circle) {
    console.log(arrt + " is its own property : " + Object.hasOwnProperty(arrt));
}


console.log(circle.constructor.prototype.desc);

console.log(Array.constructor);

var test = {
    name: "phil"
};

console.log(typeof test.name);


console.log(typeof test.constructor);

var array = [3, 4];


function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add need number'
        }
    }
    return a + b;
}

console.log(add.apply(null, array));


Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((3.6).integer());
