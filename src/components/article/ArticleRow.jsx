import React, {Component} from "react";

class ArticleRow extends Component {

    render() {
        const article = this.props.article;

        let getHostName = function(url) {
            let parser = document.createElement('a');
            parser.href = url;
            return parser.hostname;
        };

        return (
            <li className="article-listing card-panel grey lighten-5 z-depth-1">
                <a href={article.url} target="_blank">{article.title}</a>
                <p className="hostname">{getHostName(article.url)}</p>
                <p className="article-description" >{article.description}</p>
            </li>
        )
    }
}

export default ArticleRow;