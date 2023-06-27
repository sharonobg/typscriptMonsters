import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){ //runs first to initialize the state
    super();
    this.state =  {
      monsters: [], //initialize as empty
     
    };
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
  
  
  render(){  // runs after constructor - now will render the initial UI (mounts the initial state- then goes to did mount)
    console.log('render');
    return ( 
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' 
        onChange={ (event)  => {
          console.log(event.target.value);
          const searchBox = '.search-box';
          console.log(searchBox.target.value);
        }} />
        <div>
  {monsters.filter(name => name.includes('J')).map(filteredName => (
    <li>
      {filteredName}
    </li>
  ))}
</div>
        {
          //let sbv = searchBox.target.value;
          this.state.monsters.filter(monster => monster.name.includes('L', 0)).map(filteredName => (
            //<div key={monster.id}><h1>{monster.name}</h1>
            <div key = {monster.id}><h1>{monster.name}</h1>
            </div>
          ))
          }
        
      </div>
    )
    
  }
  
}

export default App;
