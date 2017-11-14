import React, {Component} from "react";
import ArticleRow from "./ArticleRow";

class ArticleComponent extends Component {

    render() {

        let rows = [];

        this.props.articles.forEach(function (article) {
            rows.push(<ArticleRow article={article} key={article.title}/>);
        });

        return (
            <ul> {rows} </ul>
        )
    }
}

export default ArticleComponent;