import React, {Component} from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.css";
import AppHeader from "./fragments/AppHeader";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    <AppHeader/>
                </div>
            </div>
        );
    }
}

export default App;
