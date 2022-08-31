import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



class App extends Component {

  constructor() {


    super();
    this.state = {
      monsters: [],
      searchField: ''

    };

  // this.handleChange = this.handleChange.bind(this)

  // this.handleClick2 = this.handleClick1.bind(this);
  }
  //agr ham arrow function use kary gye handleChange ky liye tu hamy  "// this.handleChange = this.handleChange.bind(this)" nahi likhni pary gi. or vise versa



  //  handleChange = (e) => {
  //   this.setState({ searchField: e.target.value })
  // }


  // handleClick1(){
  //   console.log("button 1 is clicked.");
  // }
  // handleClick3 = (e) => {
  //   console.log("button 3 is clicked.");
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {

    const{monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));
    
    
    return (
      <div className="App">
        
        {/* <button onClick={this.handleClick1()}>Click1</button>
        <button onClick={this.handleClick1}>Click2</button>
        <button onClick={this.handleClick2}>Click3</button>
        <button onClick={this.handleClick3}>Click4</button> */}


        <h1>Monster Rolodex</h1>

        <SearchBox 
        placeholder='Search Monster'
        handleChange={e => this.setState({searchField:e.target.value})}
        // handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
        
      </div>
    )
  }
}

export default App;
