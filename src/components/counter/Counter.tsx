import React from 'react';
import {SuperButton} from '../super button/SuperButton';
import s from './Counter.module.css'

export type CounterPropsType = {}

export const Counter = (props: CounterPropsType) => {

  return (
    <div className={s.count}>
      <div className={s.number}>
        <span>'''</span>
      </div>
      <div className={s.buttons}>
        <SuperButton name={'inc'}
                     callback={() => {}}
                     disabled={false}/>

        <SuperButton name={'reset'}
                     callback={() => {}}
                     disabled={false}/>
      </div>

    </div>
  );
};

