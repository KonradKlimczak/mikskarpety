import classnames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  round?: boolean;
}

const Button: FunctionComponent<IButtonProps> = (props) => {
  const { primary, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={classnames('button', {
        ['button-primary']: props.primary,
        ['button-round']: props.round,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
