function foo() {
    this.baz = 'baz';
    console.log(this.bar + " " + baz);
}

var bar = "bar";

foo();

var baz1 = new foo();

console.log(baz1.baz);
