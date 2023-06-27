//git test
//functional components useEffect
import { useState,useEffect } from 'react';
//import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
//boiler plate of a funtional component
const App = () =>{
  
  const [searchField, setSearchField] = useState('');//array descturing: useState gives back arr 2 values [value,setValue]
  const [monsters, setMonsters] = useState([]);//pass in empty array
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');
console.log('rendered');

//useEffect (takes 2 arguments) triggers a side effect
useEffect( () => {
  console.log('effect fired');
  fetch('https://jsonplaceholder.typicode.com/users')//this is a promise
  .then((response) =>  response.json())
  .then((users) => setMonsters(users));
}, []);//this array left blank - so it will only run once - on mount since we only need the monsters once
//second array contains state values or prop values - run callback when change runs- only rerun if values change//dependency array is empty only call this onMounnt. don't recall this function after 1st time it mounts

useEffect( () => {
  const newFilteredMonsters = monsters.filter( (monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilteredMonsters(newFilteredMonsters);
  console.log('newFilteredMonsters effect is firing');
}, [monsters,searchField]);

const onStringChange = (event)  => {
  const stringFieldString = event.target.value.toLocaleLowerCase();
  setStringField(stringFieldString);
};
const onSearchChange = (event)  => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setSearchField(searchFieldString);
};
  return ( 
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        
      />
      <SearchBox 
        onChangeHandler={onStringChange} 
        placeholder='string string'
        
      />
      <CardList monsters={filteredMonsters} 
      />
    </div>
  );
}

export default App;
