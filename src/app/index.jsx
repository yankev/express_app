import React, {Component} from 'react';
import reactDOM from 'react-dom';

class App extends Component {

    render() {
        let text = this.props.txt;
        return (
            <div>
            <h1>{text}</h1>
            <Button>Click Me</Button>
            </div>
            );
    }
}
App.PropTypes = {
    txt: React.PropTypes.string
};
App.defaultProps = {
    txt: 'Default Text'
}

class Button extends Component {
    render() {
        return (
            <button>{this.props.children}</button>
            );
    }
}

reactDOM.render(<App />, document.getElementById('app'));