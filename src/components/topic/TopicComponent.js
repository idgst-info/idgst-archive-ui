import React, {Component} from "react";
import TopicRow from "./TopicRow";
import NoRecords from "../NoRecords";

class TopicComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {topics: []};
    }

    componentDidMount() {
        fetch(`http://localhost:9000/api/v1/digests/` + this.props.digestId)
            .then(result => result.json())
            .then(response => this.setState({topics: response.topics}))
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

        let hasRecords = rows.length > 0;
        let content = null;

        if (hasRecords) {
            content = <ul className="z-depth-0"> {rows} </ul>
        } else {
            content = <NoRecords/>
        }

        return (
            <div id={"digest-" + digestID} className="digest-details">
                {content}
            </div>
        )
    }
}

export default TopicComponent;