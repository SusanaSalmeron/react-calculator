import React from 'react';
import CalcNumbers from '../CalcNumbers';
import CalcOperators from '../CalcOperators'
import style from './calc.module.css';


export default function Calc() {

    return (
        <>
            <div className={style.calcBody}>
                <div className={style.view}>
                    <input />
                </div>
                <div className={style.keys}>
                    <CalcNumbers />
                </div>
            </div>
        </>

    )
}