import classnames from 'classnames';
import * as React from 'react';
import { getSeverityClassName, Severity } from '../../utils/Severity';

interface INotificationProps {
  severity: Severity;
}

class Notification extends React.PureComponent<INotificationProps> {
  public render() {
    return (
      <div className={classnames('notification', getSeverityClassName(this.props.severity))}>{this.props.children}</div>
    );
  }
}

export default Notification;
