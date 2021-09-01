import { CalculatorProvider } from '../../context/CalculatorContext';
import KeySet from '../KeySet';
import Display from '../Display';
import style from './calculator.module.css';

export default function Calculator() {

    return (
        <>
            <div className={style.calcBody}>
                <div className={style.keys}>
                    <CalculatorProvider>
                        <Display />
                        <KeySet />
                    </CalculatorProvider>
                </div>
            </div>
        </>

    )
}