import {Component} from 'react';
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
          }//,
            //() => 
            //console.log(this.state)
            
        )
        
      );
  }
  onSearchChange = (event)  => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
      return { searchField };
    });
  }

  render(){  // runs after constructor - now will render the initial UI (mounts the initial state- then goes to did mount)
    //console.log('render');
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return ( 
      <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
          className='monsters-search-box'
        />
        <CardList monsters={filteredMonsters} 
        />
      </div>
    );
    
  }
  
}

export default App;
