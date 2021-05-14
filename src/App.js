import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
// import logo from './logo.svg';
import './App.css';    

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
//  I need to create a function that is triggered everytime onChange is triggered
//  this new function should essentially take in the monsters array and then apply a filter function to it that reflect the onChange e.target.value



  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())     
    )
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='search for monsters' 
          onChange={ e => this.setState({searchField: e.target.value})} 
          />  
          <CardList monsters={filteredMonsters}/>
          </div>
    )

  }
}
export default App;
