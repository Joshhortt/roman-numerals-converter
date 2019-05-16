var conversion = function (userNums) {
    var romanNums = ["I", "V", "X", "L", "C", "D", "M"];
    var arabicNums = [1, 5, 10, 50, 100, 500, 1000];
    var romanNumsArr = [];
    for (i = 0; i < arabicNums.length; i++) {
        var unMatch = true;
        for (j = arabicNums.length; j >= 0; j--) {
            arabicNums.forEach(function (currentNum1) {
                arabicNums.forEach(function (currentNum2) {
                    if (userNums === currentNum1 - currentNum2) {
                        unMatch = false;
                    }
                });
            });
            while (unMatch && userNums >= arabicNums[j]) {
                romanNumsArr.push(romanNums[j]);
                userNums = userNums - arabicNums[j];
            }
            if (userNums === arabicNums[i] - arabicNums[j] && userNums !== 0) {
                romanNumsArr.push(romanNums[j]);
                romanNumsArr.push(romanNums[i]);
            }
        }
    }
    romanNumsArr = romanNumsArr.join("");
    return romanNumsArr;
}

$(document).ready(function () {
    $('#value-input').submit(function (event) {
        event.preventDefault();
        var userInput = parseInt($('input').val());
        var romanNumeric = conversion(userInput);
        $('#result').text(romanNumeric)
    });
});
