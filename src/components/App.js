import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Search from '../components/Search';
import UserData from "./UserData";

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
          <Search userName={this.onSearch} />
          <UserData userName={this.state.userName} />
        </div>
      </div>
    );
  }
}

export default App;
