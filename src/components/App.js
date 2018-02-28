import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Search from '../components/Search';

class App extends Component {
  state = {
    userName: ''
  };

  onSearch = (userName) => {
    this.setState({userName})
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <br/>
          <Search userName={this.onSearch}/>
        </div>
      </div>
    );
  }
}

export default App;
