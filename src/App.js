import React, { Component } from 'react';
import { SearchBar } from './components/search-bar/search-bar.component'
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
  
  // example of a non-hook approach to state and fetching 
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())     
    )
    return (
      <div className='App'>
        <SearchBar placeHolder='search for monsters' handleChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )

  }
}
export default App;
