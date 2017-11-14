import React, {Component} from "react";
import TopicComponent from "../topic/TopicComponent";

class DigestRow extends Component {

    constructor(props) {
        super(props);
        this.state = {isShowMore: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.state);

        let content = null;
        const digest = this.props.digest;
        if (this.state.isShowMore) {
            content = <div id={'digest-' + digest.id}>
                <TopicComponent topics={digest.topics} digestId={digest._id.$oid}/>
            </div>
        }

        this.setState(prevState => ({
            isShowMore: !prevState.isShowMore,
            content: content,
            digest: digest
        }));
    }

    render() {
        const digest = this.props.digest;
        let digestURL = "#/digest/" + digest._id.$oid;
        let dataTarget = "#digest-" + digest._id.$oid;

        let formatDate = function (milliseconds) {
            let date = new Date(milliseconds);
            return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        };
        return (
            <li className="collection-item article-listing">
                <div className="digest_title"><a href={digestURL}>{digest.title}</a></div>
                <p className="digest_info">Published date {formatDate(digest.publishedDate)}</p>

                <a href="#" data-target={dataTarget}
                   onClick={this.handleClick}> {this.state.isShowMore ? 'Show more' : 'Hide'}</a>
                {this.state.content}
            </li>
        )
    }
}

export default DigestRow;