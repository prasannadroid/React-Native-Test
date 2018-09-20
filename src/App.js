import React, {Component} from 'react';
import './App.css';
import {Movie} from "./Movie";

class App extends Component {
    description = 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers'
    render() {
        return (
            <Movie year={'1999'} genre={'Sci-Fi'} tittle={'Matrix'} description={this.description}/>
        );
    }
}
export default App;
