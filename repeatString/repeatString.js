const repeatString = function(str, num) {
    let string = '';
    for (i = 0; i < num; i++) {
        if (num < 0) {
            return 'ERROR';
        } else {
            string += str;
        }
    }
    return string
}

module.exports = repeatString
