import React, {Component} from 'react';
import reactDOM from 'react-dom';

class App extends Component {
    render() {
        return <h1>Hello World</h1>
    }
}

reactDOM.render(<App />, document.getElementById('app'));