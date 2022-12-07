const removeFromArray = function(arr, remove) {
    let args = Array.from(arguments).slice(1)
    // args = args.slice(1)

    for (const i of args) {
        if (arr.includes(i)){
            arr.splice(arr.indexOf(i), 1)
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
