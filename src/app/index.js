import React, {Component} from 'react';
import reactDOM from 'react-dom';
import menu_button from './components/menu_button.js'

class App extends Component {

    constructor(props) {
        super();
        this.state = {txt: 'Default Text'};
    };

    update(e) {
        this.setState({txt: e.target.value});
    }

    render() {
        let text = this.state.txt;
        return (
            <div>
            <div className="container">
              <div className="header clearfix">
                <nav>
                  <ul className="nav nav-pills pull-right">
                    <li role="presentation" className="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="/db_stuff">Filter Form</a></li>
                    <li role="presentation"><a href="/select_all">Select All</a></li>
                    <li role="presentation"><a href="/input">Add Form</a></li>
                  </ul>
                </nav>
                <h3 className="text-muted">React Tings</h3>
              </div>

              <div className="jumbotron">
                <h1>Welcome to some database interaction test</h1>
                <p className="lead">Click here to sign up!</p>
                <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
              </div>

              <div className="row marketing">
                <div className="col-lg-12">
                  <h4>Subheading</h4>
                  <p>Stuff</p>

                  <h4>Subheading</h4>
                  <p>More stuff</p>>
                </div>
              </div>

              <footer className="footer">
                <p>&copy; kek</p>
              </footer>
            </div>
            <h1>{this.state.txt}</h1>
            <Button>Click Me</Button>
            <input type="text" onChange={this.update.bind(this)}/>
            </div>
            );
    }
}

App.PropTypes = {
    txt: React.PropTypes.string
};

// App.defaultProps = {
//     txt: 'Default Text'
// }

class Button extends Component {
    render() {
        return (
            <button>{this.props.children}</button>
            );
    }
}

reactDOM.render(<App />, document.getElementById('app'));
