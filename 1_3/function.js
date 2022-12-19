export const Calculate = (num1, operator, num2) => {
    let result = 0;
    // console.log(num1, operator, num2);

    if (isNaN(num1) === true || isNaN(num2) === true) {
        console.log("Bitte Zahl eingeben");
        console.log(isNaN(num1));
        console.log(typeof (num2));
        return;
    } else {
        switch (operator) {
            case "+":
                console.log(num1 + num2);
                break;
            case "-":
                console.log(num1 - num2);
                break;
            case "*":
                console.log(num1 * num2);
                break;
            case "/":
                console.log(num1 / num2);
                break;

            default:
                break;
        }
    }

}
