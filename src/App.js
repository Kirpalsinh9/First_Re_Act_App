import React, { Component } from 'react';
import Data from './Data.json'
import List from './Components/List'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Database: Data,
      Datalist: Data
    }
    this.IsActive = this.IsActive.bind(this)
    this.InActive = this.InActive.bind(this)
  }
  IsActive() {
    this.setState(prevstate => {
      const MainData = prevstate.Database.filter((item) => item.isActive === true)

      return {
        Datalist: MainData
      }
    })
  }
  InActive() {
    this.setState(prevstate => {
      const MainData = prevstate.Database.filter((item) => item.isActive === false)

      return {
        Datalist: MainData
      }
    })
  }
  render() {
    let listCompo = this.state.Datalist.map((item) => <List _key={item.id} item={item} />);

    return (
      <div>
        <button onClick={this.IsActive}>IsActive</button>
        <button onClick={this.InActive}> InActive</button>
        {listCompo}
      </div>
    );
  }
}

export default App;
