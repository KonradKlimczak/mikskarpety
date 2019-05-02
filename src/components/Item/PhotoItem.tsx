import * as  React from "react";

interface PhotoItemProps {
    src: string;
    caption?: string;
}

class PhotoItem extends React.Component<PhotoItemProps> {
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
