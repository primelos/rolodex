import React, { Component } from "react"; 
import './App.css'
import CardList from './components/card-list'
import SearchBox from "./components/search-box";


class App extends Component {

  constructor(){
    super()
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this) // not needed when using arrow funct
  }


  async componentDidMount(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const monster = await response.json()
    this.setState({ monsters: monster })
  }

  handleChange = (e) =>  {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"search monsters"}
          handleChange={this.handleChange}
        />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;