import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
class App extends Component {
    render() {
        return (
        <div className = "App">
        <WordCard value="hello"/>
        </div>
        );
       }
//  render() {
//  return (
//  <div>
//  {
//  Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
//  }
//  </div>
//  );
//  }
}

export default App;