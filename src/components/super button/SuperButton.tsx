import React from 'react';

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
    <button onClick={buttonClickHandler} disabled={disabled}>{name}</button>
  );
};

