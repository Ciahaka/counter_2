import React from 'react';
import s from './SuperButton.module.css'

export type SuperButtonPops = {
  name: string
  callback: () => void
  disabled: boolean
}

export const SuperButton = (props: SuperButtonPops) => {
  const {name, callback, disabled} = props
  const buttonClickHandler = () => {
    callback()
  }
  return (
    <button className={s.button} onClick={buttonClickHandler} disabled={disabled}>{name}</button>
  );
};

