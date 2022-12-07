const findTheOldest = function(people) {
    date = new Date;
    const today = date.getFullYear()
    let ages = [];
    for (const person of people) {
        if (person['yearOfDeath']) {
            ages.push(person['yearOfDeath']-person['yearOfBirth']);
        } else {
            ages.push(today-person['yearOfBirth']);
        }
    }
    return people[ages.indexOf(Math.max.apply(null, ages))];
};

// Do not edit below this line
module.exports = findTheOldest;
