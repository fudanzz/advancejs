if (!Function.prototype.bind2) {
    Function.prototype.bind2 = function (o) {
        fn = this;
        return function () {

            fn.apply(o, arguments);
        }
    }
}

function foo() {

    console.log(this.baz);
}

foo();

var baz = {
    baz: "hi"
}

var bar = foo.bind2(baz);


bar();
