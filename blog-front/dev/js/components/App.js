import React, {Component} from 'react';
require('../../scss/style.scss');

class App extends Component {
  render() {
    return(
      <div>
      {this.props.children}
      </div>
      )
  }
};


export default App;
