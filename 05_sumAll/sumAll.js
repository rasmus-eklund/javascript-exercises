const sumAll = function (a, b) {
    let sum = 0;
    let start, stop;
    if (typeof a !== 'number' || typeof b !== 'number' || a<0 || b<0) {
        return 'ERROR'
    }
    start = (a < b) ? a : b;
    stop = (a > b) ? a : b;
    for (let i = start; i < stop + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
