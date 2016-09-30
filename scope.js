//lexical scope

var foo = 'foo';

(function () {
    var foo = 42;
    console.log(foo);
})();

console.log(foo);


(function (bar) {
    var foo = bar;
    console.log(foo);
})(foo);



//block level scope by using let
function foo1() {

    var bar = "bar";

    for (let i = 0; i < bar.length; i++) {
        console.log(bar.charAt(i));
    }

    //console.log(i);
}

foo1();


function demo() {
    console.log(bar);
}

function barz() {
    var bar = 'dd';
    //demo();
}

barz();

a;
b;
var a = b;
var b = 2;
console.log(a);
console.log(b);
