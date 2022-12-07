const fibonacci = function(n) {
    if (n<0){
        return 'OOPS';
    }
    const phi = (1 + Math.sqrt(5))/2
    const psi = -1/phi
    return Number.parseInt(((phi**n - psi**n)/Math.sqrt(5)).toFixed(0));
};

// Do not edit below this line
module.exports = fibonacci;
