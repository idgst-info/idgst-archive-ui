import React, {Component} from "react";

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ArchiveComponent from "../components/archive/ArchiveComponent";
import DigestComponent from "../components/digests/DigestComponent";

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Digest = ({match}) => (
    <DigestComponent digestId={match.params.digestId}/>
);

class AppHeader extends Component {
    render() {
        return (
            <Router>
                <div className="col s12">
                    <nav>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>

                    <Route exact path="/" component={ArchiveComponent}/>
                    <Route path="/about" component={About}/>
                    <Route path="/digest/:digestId"
                           render={(props) => <Digest {...props} digestId={"123"}/>}/>
                </div>
            </Router>
        )
    }
}

export default AppHeader;