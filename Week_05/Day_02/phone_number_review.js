function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(number => {
        mask=mask.replace('x', number);
    });

    return mask
}


function phoneNumberGenerator(arr) {
    //capture groups
    let format = arr.join('').match(/(\d{3})(\d{3})(\d{4})/)
    console.log(format);
    if(format) return `(${format[1]}) ${format[2]}-${format[3]}`
}

console.log(phoneNumberGenerator([1,2,3,4,5,6,7,8,9,0]))

function phoneNumber(arr) {
    
    let areaCode = arr.splice(0, 3).join('')
    let exCode = arr.splice(0, 3).join('')
    let lnNum = arr.splice(0, 4).join('')

    return `(${areaCode}) ${exCode}-${lnNum}`
}

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]))



