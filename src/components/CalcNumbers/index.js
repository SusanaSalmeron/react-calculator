import React from 'react';
import style from './calcKeys.module.css';


export default function calcKeys() {
    return (
        <div className={style.container}>
            <button className={style.number}
                value="7">7
            </button>
            <button className={style.number}
                value="8">8
            </button>
            <button className={style.number}
                value="9">9
            </button>
            <button className={style.number}
                value="4"> 4
            </button>
            <button className={style.number}
                value="5"> 5
            </button>
            <button className={style.number}
                value="6"> 6
            </button>
            <button className={style.number}
                value="1"> 1
            </button>
            <button className={style.number}
                value="2"> 2
            </button>
            <button className={style.number}
                value="3"> 3
            </button>
            <button className={style.zero}
                value="0"> 0
            </button>
            <button className={style.total}
                value="="> =
            </button>
            <button className={style.operator}
                value="+"> +
            </button>
            <button className={style.operator}
                value="-"> -
            </button>
            <button className={style.operator}
                value="*"> x
            </button>
            <button className={style.operator}
                value="/"> /
            </button>
        </div>
    )
}