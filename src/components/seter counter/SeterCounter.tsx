import React from 'react';
import {SuperButton} from '../super button/SuperButton';

export type SeterPropsType={

}

export const SeterCounter = (props:SeterPropsType) => {
  return (
    <div>
      <SuperButton name={'set'} callback={()=>{}} disabled={false}/>
    </div>
  );
};

