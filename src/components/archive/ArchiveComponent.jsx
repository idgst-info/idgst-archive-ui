import React, {Component} from "react";
import NoRecords from "../NoRecords";
import PaginationComponent from "../pagination/PaginationComponent";
import DigestsHeader from "./DigestsHeader";
import DigestRow from "./DigestRow";

class ArchiveComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digests: [],
            response: {},
            pageNumber: 1
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        this.fetchDigests(this.state.pageNumber);
    }

    fetchDigests(pageNumber) {
        fetch(`http://idgst.info/api/v1/digests?&sortOrder=desc&sortBy=publishedDate&pageNumber=` + pageNumber)
            .then(result => result.json())
            .then(response => this.setState({
                response: response,
                digests: response.content
            }))
            .catch(function () {
                console.error("Error retrieving data from server.");
            });
    }

    handleUpdate(newPgeNumber, e) {
        this.fetchDigests(newPgeNumber);
    }

    render() {
        let rows = [];
        this.state.digests.forEach(function (digest) {
            rows.push(<DigestRow digest={digest} key={digest._id.$oid}/>);
        });

        let hasRecords = rows.length > 0;
        let collectionComponent = null;

        if (hasRecords) {
            collectionComponent = <ul className="collection"> {rows} </ul>
        } else {
            collectionComponent = <NoRecords/>
        }

        return (
            <div id="digestsLists">
                <div className="row">
                    <div className="col s12">
                        <DigestsHeader/>

                        {collectionComponent}

                        <PaginationComponent response={this.state.response}
                                             onPageChange={this.handleUpdate}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArchiveComponent;