var bar = 'bar2';

function foo() {

    console.log(this.bar);
}



var obj = {
    bar: "sdfdsf"
};

foo();

foo.call(obj);
