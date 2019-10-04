import classnames from 'classnames';
import React from 'react';

import { debounce } from '../../utils';

interface ITextFieldProps {
  icon?: string;
  placeholder: string;
  debounce?: number;
  onChange: (value: string) => void;
}

export const TextField: React.SFC<ITextFieldProps> = (props) => {
  const handleChange = props.debounce
    ? debounce((value: string) => {
        props.onChange(value);
      }, props.debounce)
    : (value: string) => {
        props.onChange(value);
      };

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => handleChange(event.target.value);

  return (
    <div className={classnames('text-field')}>
      <div className={classnames('text-field--icon')}>
        <img src={props.icon} />
      </div>
      <input data-testid='input' placeholder={props.placeholder} onChange={getValue} />
    </div>
  );
};
