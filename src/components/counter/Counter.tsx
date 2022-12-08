import React from 'react';
import {SuperButton} from '../super button/SuperButton';
import s from './Counter.module.css'

export type CounterPropsType = {
  number: number
  maxValue: number
  startValue: number
  disabled: boolean
  incHandler: () => void
  resetHandler: () => void
}

export const Counter = (props: CounterPropsType) => {
 const {number, maxValue, startValue, disabled, incHandler, resetHandler} = props

  return (
    <div className={s.count}>
      <div className={s.number}>
        <span className={number === maxValue ? s.numberRed : ''}> {number}</span>
      </div>
      <div className={s.buttons}>
        <SuperButton name="inc"
                     callback={incHandler}
                     disabled={number === maxValue}
        />

        <SuperButton name="reset"
                     callback={resetHandler}
                     disabled={number === startValue}
        />
      </div>

    </div>
  );
};

