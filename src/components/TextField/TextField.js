import React, { Component } from "react";
import classnames from "classnames";
class TextField extends Component {
    render() {
        return (
            <div className={classnames("text-field")}>
                <div>
                    <img src={this.props.icon} />
                </div>
                <input />
            </div>
        );
    }
}

export default TextField;
