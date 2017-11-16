import React, {Component} from "react";
import TopicComponent from "../topic/TopicComponent";

class DigestComponent extends Component {

    render() {
        return (
            <div>
                <div className="collection">
                    <TopicComponent digestId={this.props.digestId} showDigestHeader = {true}/>
                </div>
            </div>
        )
    }
}

export default DigestComponent;