import * as React from 'react';
import { assertNever } from '../../utils';
import { Email } from './Email';
import { Phone } from './Phone';

export type IconName = 'email' | 'phone';

interface IIconProps {
  icon: IconName;
}

export const Icon: React.FunctionComponent<IIconProps> = (props) => {
  switch (props.icon) {
    case 'email':
      return <Email />;
    case 'phone':
      return <Phone />;

    default:
      return assertNever(props.icon);
  }
};
