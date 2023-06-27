import {Component} from 'react';//class component not functional component

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    //note need Andre's video on classes
    this.state =  {
      name: {firstName:'Candy and Marshy', lastName:'OB'},
      company: "sharon's house"
    }
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name.firstName } {this.state.name.lastName }! I work at {this.state.company}</p>

          <button onClick={() => {
            //this.setState({name: {firstName: 'Andrei',lastName:'Neagoy'} })
            //console.log(this.state);
            //for current console log - function with callback is better:
            this.setState((state, props) => {
              return {
                name: {firstName: 'Andrei', lastName: 'Neaogie' },
              }
            }, () => {
              console.log(this.state);
            });
          }}>Change name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
