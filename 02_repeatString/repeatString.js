const repeatString = function (string, num) {
    let out = '';
    if (num < 0) {
        out = "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            out += string;
        }
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
