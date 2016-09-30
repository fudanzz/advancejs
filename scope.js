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
