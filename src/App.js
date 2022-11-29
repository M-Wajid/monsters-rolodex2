import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  };

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) =>
              monster.name.toLocaleLowerCase().includes(this.state.searchString)
            );
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox onChange={this.onSearchChange} placeholder='Search Monster' className='Search Box'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
