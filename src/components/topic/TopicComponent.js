import React, {Component} from "react";
import TopicRow from "./TopicRow";
import NoRecords from "../NoRecords";

class TopicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            digest: {},
            showDigestHeader: false
        };
    }

    componentDidMount() {
        fetch(`http://localhost:9000/api/v1/digests/` + this.props.digestId)
            .then(result => result.json())
            .then(response => this.setState({
                digest: response,
                topics: response.topics
            }))
            .catch(function () {
                console.error("Error retrieving data from server. Using mocked data");
                this.setState({topics: []})
            });
    }

    render() {
        const digestID = this.props.digestId;
        let rows = [];

        this.state.topics.forEach(function (topic) {
            rows.push(<TopicRow topic={topic} key={topic.topic + digestID}/>);
        });

        let header = null;
        if (this.props.showDigestHeader) {
            header = <h4 className="center-align">{this.state.digest.title}</h4>
        } else {
            header = <span/>
        }

        let hasRecords = rows.length > 0;
        let content = null;

        if (hasRecords) {
            content = <ul className="z-depth-0"> {rows} </ul>
        } else {
            content = <NoRecords/>
        }

        return (
            <div>
                {header}
                <div id={"digest-" + digestID} className="digest-details">
                    {content}
                </div>
            </div>
        )
    }
}

export default TopicComponent;