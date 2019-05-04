import classnames from 'classnames';
import * as React from 'react';

interface TextFieldProps {
  icon?: string;
  placeholder: string;
  debounce?: number;
  onChange: (value: string) => void;
}

const TextField: React.SFC<TextFieldProps> = props => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.debounce) {
      debounce(() => props.onChange(event.target.value), props.debounce);
    } else {
      props.onChange(event.target.value);
    }
  };

  return (
    <div className={classnames('text-field')}>
      <div className={classnames('text-field--icon')}>
        <img src={props.icon} />
      </div>
      <input placeholder={props.placeholder} onChange={handleChange} />
    </div>
  );
};

export default TextField;
