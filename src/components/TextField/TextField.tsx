import classnames from 'classnames';
import * as React from 'react';

import { debounce } from '../../utils/debounce';

interface TextFieldProps {
  icon?: string;
  placeholder: string;
  debounce?: number;
  onChange: (value: string) => void;
}

const TextField: React.SFC<TextFieldProps> = props => {
  const handleChange = props.debounce
    ? debounce((value: string) => {
        props.onChange(value);
      }, props.debounce)
    : (value: string) => {
        props.onChange(value);
      };

  return (
    <div className={classnames('text-field')}>
      <div className={classnames('text-field--icon')}>
        <img src={props.icon} />
      </div>
      <input data-testid='input' placeholder={props.placeholder} onChange={event => handleChange(event.target.value)} />
    </div>
  );
};

export default TextField;
