var assert = require('assert');

function Ninja() {
    this.swung = false;

    this.swingSword = function () {
        return !this.swung;
    }
}


Ninja.prototype.swingSword = function () {
    return this.swung;
}

var ninja = new Ninja();

assert.ok(ninja.swingSword(), ['call instance method , not the prototype method']);
