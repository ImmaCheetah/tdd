function analyzeArray(array) {
    if (array == undefined) {
        throw ('No input');
    }

    if (!Array.isArray(array)) {
        throw ('Invalid input');
    }

    array.forEach((element) => {
        if (typeof element === 'string') {
            throw ('Array contains string'); 
        }
    })
    
    const averageResult = () => {
        let total = 0;
        array.forEach((element) => {
            total += element;
        })

        return total / array.length;
    } 

    const minResult = () => {
        let minimum = array[0];
        array.forEach((element) => {
            if (element < minimum) {
                minimum = element
            }
        })

        return minimum;
    }

    const maxResult = () => {
        let maximum = array[0];
        array.forEach((element) => {
            if (element > maximum) {
                maximum = element
            }
        })

        return maximum;
    }

    return {
        average: averageResult(array),
        min: minResult(array),
        max: maxResult(array),
        length: array.length
    }
}

export {analyzeArray}