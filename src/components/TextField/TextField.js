import React, { Component } from "react";
import classnames from "classnames";
class TextField extends Component {
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
