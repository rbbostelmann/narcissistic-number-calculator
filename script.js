//Returns boolean true or false if a given number is narcissistic or not.
function narcissistic(value) {
    //Gets the lenght of a number
    const len = Math.ceil(Math.log10(value + 1));

    //Gets the digits then raises them to the power of the lenght of the initial number.
    let digits = value.toString().split('');
    let realDigits = digits.map(Number => Math.pow(Number, len))

    //Adds the individually pow-raised digits to one another and checks if narcissistic 
    return realDigits.reduce((previous, next) => previous + next) == value;
}