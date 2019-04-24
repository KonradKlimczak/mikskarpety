import React, { Component } from "react";

class PhotoItem extends Component {
    render() {
        return (
            <figure>
                <img className="big-grid" src={this.props.src} />
                {this.props.caption && <figcaption>{this.props.caption}</figcaption>}
            </figure>
        );
    }
}

export default PhotoItem;
