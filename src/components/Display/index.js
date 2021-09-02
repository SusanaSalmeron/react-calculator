import React, { useContext } from 'react';
import CalculatorContext from '../../context/CalculatorContext';
import style from './display.module.css';

export default function Display() {


    const { options } = useContext(CalculatorContext)


    return (
        <>
            <div className={style.display}>
                <div className={style.view}>
                    {options}
                </div>
            </div>

        </>

    )
}