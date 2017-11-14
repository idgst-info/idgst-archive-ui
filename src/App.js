import React, {Component} from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.css";
import AppHeader from "./fragments/AppHeader";
import ArchiveComponent from "./components/archive/ArchiveComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {digests: []};
    }
    componentDidMount(){
        fetch(`http://localhost:9000/api/v1/digests`)
            .then(result=>result.json())
            .then(response=>this.setState({digests: response.content}))
            .catch(function() {
                console.error("Error retrieving data from server. Using mocked data");
                this.setState({digests: []})
            });
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <AppHeader/>
                    <ArchiveComponent digests={this.state.digests}/>
                </div>
            </div>
        );
    }
}

export default App;
