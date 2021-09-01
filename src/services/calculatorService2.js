
const operateDisAndDat = (accum, str, op) => {
    const newNumber = (str === "") ? 0 : parseInt(str)
    switch (op) {
        case "+": return accum + newNumber
        case "-": return accum - newNumber
        case "*": return accum * newNumber
        case "/": return accum / newNumber
        default: return newNumber
    }

}

//This will tackle the proper arithmetic operation
function process(subArr, operation) {
    const chunks = subArr.join("").split(operation)
    return operateDisAndDat(parseInt(chunks[0]), chunks[1], operation)
}

//At the end of this funcion we would either have a single value or just + and -
function reduceByPriorityOperation(arr) {
    //While we have either a multiplication or a division...
    while (arr.indexOf("*") >= 0 || arr.indexOf("/") >= 0) {
        //First we find which operation
        const operation = (arr.includes("*")) ? "*" : "/"
        //Let's find where we have this operation symbol
        let operatorPos = arr.indexOf(operation)
        //We need to find the first part of the pair of values, one on the left and one on the right
        //so left position should be AT LEAST one position to the left
        let leftPos = operatorPos - 1
        //We iterate until either we reach the array head, or we find another operation symbol. 
        while (leftPos >= 0 && !isNaN(arr[leftPos])) leftPos--
        //Same with rightie!!
        let rightPos = operatorPos + 1
        //We iterate until we find the end of the array or another symbol
        while (rightPos < arr.length && !isNaN(arr[rightPos])) rightPos++

        //We get a sub array of elements
        let subArr = arr.slice(leftPos + 1, rightPos)
        let total = process(subArr, operation)
        //We substitute the new calculation , like reducing a * or / operation for its value
        arr.splice(leftPos + 1, rightPos - leftPos + 1, `${total}`)
    }
    return arr
}

export default function calculate(arr) {
    let stringNum = "";
    let op = "";
    let accum = 0

    const reducedArr = reduceByPriorityOperation(arr)

    for (let i = 0; i < reducedArr.length; i++) {
        //operations

        if (isNaN(arr[i])) {
            accum = operateDisAndDat(accum, stringNum, op)
            op = arr[i]
            stringNum = ""
        } else {
            stringNum += arr[i]
        }
    }
    if (stringNum !== "" && op !== "") {
        accum = operateDisAndDat(accum, stringNum, op)
    }
    return accum
}

