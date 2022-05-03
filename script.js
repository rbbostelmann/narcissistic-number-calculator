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

//Given a minmax number, calculates the narcissistic numbers from min up to max number
function narc(min, max) {
    //Empty array that will hold our collection or narcissistic numbers
    let isit = [];
    //Looping from min to max
    for (let i = min; i <= max; i++) {
        //Gets the lenght of every number
        const len = Math.ceil(Math.log10(i + 1));

        //Gets the digits then raises them to the power of the lenght of the initial number.
        let digits = i.toString().split('');
        let realDigits = digits.map(Number => Math.pow(Number, len))

        //Adds the individually pow-raised digits to one another
        let check = realDigits.reduce((previous, next) => previous + next);

        //Checks and pushes values to the array
        if (check == i) {
            isit.push(i)
        }
    }
    //Returns array of narcissistic numbers
    return isit;
}

console.log(narc(1, 1741725))