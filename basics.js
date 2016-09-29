function demo() {
    console.log('demo');
}

demo();

var test = function () {
    console.log('test');
}

test();

function outer() {



    inner();

    function inner() {
        var x = 1;
        console.log('inner');
    }

    if (true) {
        x = 10;
    }

    console.log(x);

    console.log('outer');

}

outer();


var numbers = [2, 8, 7, 1];

console.log(numbers.sort(function (v1, v2) {
    return v2 - v1;
}));

numbers.forEach(function (value, index) {
    console.log(value);
})


function forEach1(numbers, callback) {
    for (var i = 0; i < numbers.length; i++) {
        callback.call(numbers[i], i);
    }
}


forEach1(numbers, function (index) {
    console.log(numbers[index]);
});
