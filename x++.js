//x++ means

function plusPlus(orig_x) {
    var orig_x_coerced = Number(orig_x);
    x = orig_x_coerced + 1
    return orig_x_coerced
}

var x = "5";
plusPlus(x) //5
x; //6