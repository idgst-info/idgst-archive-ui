import React, {Component} from "react";
import NoRecords from "../NoRecords";
import Pagination from "../Pagination";
import DigestsHeader from "./DigestsHeader";
import DigestRow from "./DigestRow";

class ArchiveComponent extends Component {
    render() {
        let rows = [];
        this.props.digests.forEach(function (digest) {
            rows.push(<DigestRow digest={digest} key={digest._id.$oid}/>);
        });

        let hasRecords = rows.length > 0;
        let content = null;

        if (hasRecords) {
            content = <ul className="collection"> {rows} </ul>
        } else {
            content = <NoRecords/>
        }

        return (
            <div id="digestsLists">
                <div className="row">
                    <div className="col s12">
                        <DigestsHeader/>

                        {content}

                        <Pagination/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArchiveComponent;