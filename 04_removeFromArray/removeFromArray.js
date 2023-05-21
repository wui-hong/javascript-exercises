const removeFromArray = function(arr, ...args) {
    return arr.filter((a) => !args.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;
