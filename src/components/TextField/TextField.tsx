import classnames from "classnames";
import * as React from "react";

interface TextFieldProps {
  icon?: string;
  placeholder: string;
}

class TextField extends React.PureComponent<TextFieldProps> {
  render() {
    return (
      <div className={classnames("text-field")}>
        <div className={classnames("text-field--icon")}>
          <img src={this.props.icon} />
        </div>
        <input placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default TextField;
