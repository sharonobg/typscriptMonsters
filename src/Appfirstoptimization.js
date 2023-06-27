import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){ //runs first to initialize the state
    super();
    this.state =  {
      monsters: [], //initialize as empty
      searchField: '',
    }
    console.log('constructor');
  }

  componentDidMount(){
    //lifecycle method once render mounts the initial state - this runs
    console.log('component Did Mount');
    fetch('https://jsonplaceholder.typicode.com/users')//this is a promise
      //.then(response => console.log(response));
      .then((response) =>  response.json())
      //.then( (users) => console.log(users))
      .then( (users) => 
        this.setState (
          () => {
            return{ monsters: users};
          },
            () => 
            console.log(this.state)
            
        ),
        
      )
  }
  onSearchChange = (event)  => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
      return { searchField };
    });
  }

  render(){  // runs after constructor - now will render the initial UI (mounts the initial state- then goes to did mount)
    console.log('render');
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return ( 
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={this.onSearchChange }
        />
        
  {
        filteredMonsters.map( (monster) => {
          return(
            <div key = {monster.id}>
            <h1>{monster.name}</h1>
            </div>
          );
  })}
        
      </div>
    );
    
  }
  
}

export default App;
