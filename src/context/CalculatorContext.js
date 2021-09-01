import { createContext, useState } from "react";

const CalculatorContext = createContext(null)

export function CalculatorProvider({ children }) {

    const [options, setOptions] = useState([])

    return (
        <CalculatorContext.Provider value={{ options, setOptions }}>
            {children}
        </CalculatorContext.Provider>
    )
}

CalculatorProvider.displayName = 'CalculatorProvider'

export default CalculatorContext