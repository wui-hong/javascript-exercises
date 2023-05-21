const palindromes = function (a) {
    check='abcdefghijklmnopqrstuvwxyz';
    a = a.toLowerCase()
    final = [];
    for(let i=0;  i < a.length;i++){
        let curr = a[i];
        if (check.includes(curr)) {
            final.push(curr);
        }
    }
    final_str = final.join();
    let len = final_str.length;
    let middle = len/2;
    for(let i = 0; i < middle; i ++){
        let outer = final_str.length -1 - i;
        if (final_str[i] !== final_str[outer]){
            return false;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
