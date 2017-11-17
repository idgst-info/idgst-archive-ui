import React, {Component} from "react";

class Chevron extends Component {

    render() {
        return (
            <li className="waves-effect">
                <a href="javascript:void(0)" onClick={this.props.pageFunction}>
                    <i className="material-icons">{this.props.chevronText}</i>
                </a>
            </li>
        )
    }
}
export default Chevron;