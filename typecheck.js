if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegZero = isNegativeZero(x);
        var yNegZero = isNegativeZero(y);

        if (xNegZero || yNegZero) {
            return xNegZero && yNegZero;
        }
        else if (isItNan(x) && isItNan(y)) {
            return true
        }
        else {
            return x === y;
        }
        // *************
        function isNegativeZero(v) {
            return v == 0 && (1 / v) == -Infinity;
        }

        function isItNan(v) {
            return v != v;
        }
    }
}


console.log(Object.is(42, 42));