import React, { Component } from 'react';
import Content from './components/Content/Content';
import {catsData} from './catsData';
import './App.css';

class App extends Component {

  state = {
    catsData: catsData
  }

  render() {

    return (
      <div className="App">
         <Content catsData={this.state.catsData}/>
      </div>
    );

  }

}

export default App;
