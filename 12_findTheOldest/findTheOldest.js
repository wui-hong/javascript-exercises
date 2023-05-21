const findTheOldest = function(a) {
    let max = -1;
    let temp;
    let potato = a.map(inner => {
        if (inner.yearOfDeath) {
            inner.age = inner.yearOfDeath - inner.yearOfBirth;
        } else {
            let today = new Date();
            let year = today.getFullYear();
            console.log(today);
            inner['age'] = year - inner.yearOfBirth;
        }
        if (inner.age > max){
            temp = inner.age;
            max = inner.age;
        }
        return inner;
    });
    console.log(potato);
    let final = potato.filter(inner => inner.age===temp);
    console.log(final)
    return final[0];

};

// Do not edit below this line
module.exports = findTheOldest;
