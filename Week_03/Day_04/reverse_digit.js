function printDigits(num) {
    // a return number starting at 0
    let revNum = 0;
    // while a whole int exist
    while (num != 0) {
        //getting last digit  // 6
        lastDigit = num % 10;
        console.log("last digit", lastDigit);
        // building out the 10 col
        revNum = revNum * 10 + lastDigit;
        console.log("reverse num", revNum);
        // chop off the last digit
        num = Math.floor(num / 10);
        console.log("new number", num);
    }
    return revNum
}
console.log(printDigits(456));