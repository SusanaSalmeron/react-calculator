

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

export default function calculate(arr) {
    let stringNum = "";
    let op = "";
    let accum = 0

    for (let i = 0; i < arr.length; i++) {
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

