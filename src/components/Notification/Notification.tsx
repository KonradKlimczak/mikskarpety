import classnames from "classnames";
import * as React from "react";
import { getSeverityClassName, Severity } from '../Severity';

interface NotificationProps {
  severity: Severity;
}

class Notification extends React.PureComponent<NotificationProps> {
  render() {
    return (
      <div className={classnames("notification", getSeverityClassName(this.props.severity))}>
        {this.props.children}
      </div>
    );
  }
}

export default Notification;
