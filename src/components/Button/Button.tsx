import classnames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { Size, getSizeClassName } from '../../utils';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  round?: boolean;
  size?: Size;
}

export const Button: FunctionComponent<IButtonProps> = (props) => {
  const { primary, round, size, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={classnames(
        'button',
        {
          ['button-primary']: primary,
          ['button-round']: round,
        },
        getSizeClassName(size),
      )}
    >
      {props.children}
    </button>
  );
};
