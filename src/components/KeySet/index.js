import React, { useContext } from 'react';
import CalculatorContext from '../../context/CalculatorContext';
import style from './keySet.module.css';


export default function CalcKeys() {

    const { options, setOptions } = useContext(CalculatorContext)

    const handleKey = (evt) => {
        const elements = options.slice()
        elements.push(evt.target.value)
        setOptions(elements)
    }

    const handleTotal = () => {
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

        const operations = (arr) => {
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
        const result = operations(options)
        setOptions([result])

    }

    const handleErase = () => {
        setOptions([])

    }

    return (
        <div className={style.container}>
            <button className={style.number}
                value="7" onClick={handleKey}>7
            </button>
            <button className={style.number}
                value="8" onClick={handleKey}>8
            </button>
            <button className={style.number}
                value="9" onClick={handleKey}>9
            </button>
            <button className={style.operator}
                value="/" onClick={handleKey}> ÷
            </button>
            <button className={style.number}
                value="4" onClick={handleKey}> 4
            </button>
            <button className={style.number}
                value="5" onClick={handleKey}> 5
            </button>
            <button className={style.number}
                value="6" onClick={handleKey}> 6
            </button>
            <button className={style.operator}
                value="*" onClick={handleKey}> 𝘅
            </button>
            <button className={style.number}
                value="1" onClick={handleKey}> 1
            </button>
            <button className={style.number}
                value="2" onClick={handleKey}> 2
            </button>
            <button className={style.number}
                value="3" onClick={handleKey}> 3
            </button>
            <button className={style.operator}
                value="-" onClick={handleKey}> -
            </button>

            <button className={style.zero}
                value="0" onClick={handleKey}> 0
            </button>
            <button className={style.operator}
                value="+" onClick={handleKey}> +
            </button>
            <button className={style.erase}
                value="AC" onClick={handleErase}>␡
            </button>

            <button className={style.total}
                value="=" onClick={handleTotal}> =
            </button>










        </div>
    )
}