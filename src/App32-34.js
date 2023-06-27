import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state =  {
      monsters: [
        {
          name:'Linda',
          id: '12e1233'
        },
         {
          name:'Frank',
          id: '12ecasl233'
        },
        {
          name: 'Jacky',
          id: '12zcmsl432'
        },
        {
          name: 'Andrei',
          id: '1mzcmzl831'
        },
        {
          name: 'Andrew',
          id: '1mhrmzl891'
        }
      
      ]
     
    };
  }
  render(){
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
