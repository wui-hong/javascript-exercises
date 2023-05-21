const sumAll = function(first, second) {
    final = 0;
    if (typeof(first) != 'number' || typeof(second)!= 'number' || first <0 || second<0){
        return 'ERROR';
    }
    if (first > second){
        let temp = first;
        first = second;
        second = temp;
    }
    for (let i = first; i < second +1; i++){
        final += i;
    }
    return final;

};

// Do not edit below this line
module.exports = sumAll;
