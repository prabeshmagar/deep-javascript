var trendRate = -0;
console.log(trendRate === -0);

var t = trendRate.toString();
console.log(t);

console.log(trendRate === 0);

console.log(trendRate < 0);


console.log(Object.is(trendRate, -0));
console.log(Object.is(trendRate, 0));


console.log(Math.sign(-3));
console.log(Math.sign(3));
console.log(Math.sign(-0));
console.log(Math.sign(0));

function sign(v) {
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}


console.log(sign(-3));
console.log(sign(3));
console.log(sign(-0));
console.log(sign(0)); 