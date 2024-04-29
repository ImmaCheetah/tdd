const calculator = (() => {
    function add(num1, num2) {
        if (!num1 || !num2) {
            return null;
        }
        return num1 + num2;
    }

    function sub(num1, num2) {
        if (!num1 || !num2) {
            return null;
        }
        return num1 - num2;
    }

    function mult(num1, num2) {
        if (!num1 || !num2) {
            return null;
        }
        return num1 * num2;
    }

    function div(num1, num2) {
        if (num2 == 0) {
            throw ("can't divide by 0");
        }
        if (!num1 || !num2) {
            return null;
        }

        return num1 / num2;
    }

    return { add, sub, mult, div }
})



export {calculator}

