import classnames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { Size, getSizeClassName } from '../../utils/Size';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  round?: boolean;
  size?: Size;
}

const Button: FunctionComponent<IButtonProps> = (props) => {
  const { primary, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={classnames('button', {
        ['button-primary']: props.primary,
        ['button-round']: props.round,
      }, getSizeClassName(props.size))}
    >
      {props.children}
    </button>
  );
};

export default Button;
