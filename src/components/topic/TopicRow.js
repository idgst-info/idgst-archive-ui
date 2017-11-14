import React, {Component} from "react";

import ArticleComponent from "../article/ArticleComponent";

class TopicRow extends Component {

    render() {
        const topic = this.props.topic;

        return (
            <li className="collection-item ">
                <div className="topic-title">
                    <i className="tiny material-icons">turned_in_not</i>
                    {topic.topic}
                </div>
                <ArticleComponent articles = {topic.articles}/>
            </li>
        )
    }
}

export default TopicRow;