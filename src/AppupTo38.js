import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){ //runs first to initialize the state
    super();
    this.state =  {
      monsters: [], //initialize as empty
     
    };
    console.log('1');
  }
  componentDidMount(){
    //lifecycle method once render mounts the initial state - this runs
    console.log('3');
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
    console.log('2');
    return ( 
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return<div key={monster.id}><h1>{monster.name}</h1></div>;
          })
        }
      </div>
    )
    
  }
  
}

export default App;
