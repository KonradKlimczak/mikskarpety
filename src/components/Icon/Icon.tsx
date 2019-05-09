import * as React from 'react';
import { assertNever } from '../../utils/assertNever';
import { Email } from './Email';
import { Phone } from './Phone';

export type IconName = 'email' | 'phone';

interface IconProps {
  icon: IconName;
}

export const Icon: React.FunctionComponent<IconProps> = props => {
  switch (props.icon) {
    case 'email':
      return <Email />;
    case 'phone':
      return <Phone />;

    default:
      return assertNever(props.icon);
  }
};
