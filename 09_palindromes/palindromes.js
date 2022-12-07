const palindromes = function (p) {
    p = p.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    p = p.replace(/\s/g,"");
    p = p.toLowerCase()
    const n = p.length;
    return (p.slice(0,Math.floor(n/2)) == p.slice(Math.ceil(n/2)).split("").reverse().join(''))
};

// Do not edit below this line
module.exports = palindromes;
