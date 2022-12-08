import React from 'react';
import {SuperButton} from '../super button/SuperButton';

export type CounterPropsType = {}

export const Counter = (props: CounterPropsType) => {

  return (
    <div>
      <SuperButton name={'inc'}
                   callback={() => {}}
                   disabled={false}/>
      <SuperButton name={'reset'}
                   callback={() => {}}
                   disabled={false}/>
    </div>
  );
};

