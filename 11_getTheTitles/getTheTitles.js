const getTheTitles = function(arr) {
    let out = [];
    for (const i of arr) {
        out.push(i['title']);
    }
    return out;
};

// Do not edit below this line
module.exports = getTheTitles;
