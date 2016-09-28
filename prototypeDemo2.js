var assert = require('assert');

function Ninja() {
    this.swung = true;

}


Ninja.prototype.swingSword = function () {
    return this.swung;
}

var ninja = new Ninja();

assert.ok(ninja.swingSword(), ['method exist, even after out of context']);
