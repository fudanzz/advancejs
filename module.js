var foo = (function () {
    var bar = "hello module";

    function demo() {
        console.log("demo function");
    }

    return {
        baz: function () {
            console.log(bar);
        },

        demo: demo

    }
})();


foo.baz();

foo.demo();
