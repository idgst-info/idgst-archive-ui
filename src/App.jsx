import React, {Component} from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.css";
import AppRouter from "./fragments/AppRouter";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    <AppRouter/>
                </div>
            </div>
        );
    }
}

export default App;
