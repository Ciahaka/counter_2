import React from 'react';
import {SuperButton} from '../super button/SuperButton';
import s from '../counter/Counter.module.css'

export type SeterPropsType={

}

export const SeterCounter = (props:SeterPropsType) => {
  return (
    <div className={s.count}>
      <div className={`${s.number} ${s.input}`}>
        <input type={'number'}/>
        <input type={'number'}/>
      </div>

      <div className={s.buttons}>
        <SuperButton name={'set'} callback={()=>{}} disabled={false}/>
      </div>

    </div>
  );
};

