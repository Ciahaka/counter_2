import React from 'react';
import {SuperButton} from '../super button/SuperButton';
import s from '../counter/Counter.module.css'

export type SeterPropsType={
  setCallback:()=>void
}

export const SeterCounter = (props:SeterPropsType) => {

  return (
    <div className={s.count}>
      <div className={`${s.number} ${s.input}`}>
        Max Value<input  type={'number'}/>
        Start Value<input  type={'number'}/>
      </div>

      <div className={s.buttons}>
        <SuperButton
          name={'set'}
          callback={props.setCallback}
          disabled={false}/>
      </div>

    </div>
  );
};

