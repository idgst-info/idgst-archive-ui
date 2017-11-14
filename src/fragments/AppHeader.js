import React, {Component} from "react";

class AppHeader extends Component {
    render() {
        return (
            <div className="col s12">
                <nav>
                    <div className="nav-wrapper  green lighten-3">
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="/#/">Home</a></li>
                            <li><a href="/#/">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default AppHeader;