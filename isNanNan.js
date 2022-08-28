//NaN("not a number")---> invalid number

var myAge = Number("0o46");

console.log(myAge);

var myNextAge = Number(39)
console.log({ myNextAge })

var myCatAge = Number("n/a");
console.log({ myCatAge });

var c = myAge - "my son's age"
console.log({ c })

var a = myCatAge === myCatAge;
console.log({ a })


var f = isNaN(myAge);
console.log({ f })
var g = isNaN(myCatAge);
console.log({ g })
var i = isNaN("my son's age");
console.log({ i })
var d = Number.isNaN(myCatAge);
console.log({ d })

var e = Number.isNaN("my son's age");
console.log({ e })



var x;
var y;

console.log(x === y);