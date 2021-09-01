import React from 'react';
import style from './calcOperators.module.css';


export default function calcKeys() {
    return (
        <div className={style.container}>
            <button className={style.operator}> +</button>
            <button className={style.operator}> -</button>
            <button className={style.operator}> *</button>
            <button className={style.operator}> /</button>
            <button className={style.operator}> =</button>
        </div>
    )
}