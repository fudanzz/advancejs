var assert = require('assert');

function Ninja() {
    this.member1 = 'test';
    this.swung = true;

}


Ninja.prototype.swingSword = function () {
    return this.swung;
}

var ninja = new Ninja();

assert.ok(ninja.swingSword(), ['method exist, even after out of context']);

Ninja.prototype.member2 = 'test';
ninja.constructor.member3 = 'test3';

console.log(ninja.member1);
console.log(ninja.member2);
console.log(ninja.constructor);

assert.ok(typeof ninja == 'object', ['ninja is object']);

assert.ok(ninja instanceof Ninja, ['ninja is from Ninja']);

assert.ok(ninja.constructor == Ninja, ['ninja is from Ninja']);
