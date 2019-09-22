import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash'; 
import './App.css';
import logo from './pic.jpg';

const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 score: 0,
 guess: [],
 text: [],
 completed: false,
 uncompleted: false
 }
}

export default class WordCard extends Component {

    constructor(props){
        super(props);
        this.state = prepareStateFromWord(this.props.value);
    }

    activationHandler = (c) => {
        
        console.log(`${c} has been activated.`) 
        let guess = [this.state.guess] + c
        let text = [this.state.guess] + c
        this.setState({guess})
        this.setState({text})

        if(guess.length == this.state.chars.length&&this.state.attempt<=3){
            if(this.state.attempt >2){
                this.setState({uncompleted: true,score: this.state.score - 1})
            }
            this.setState({text: [this.state.guess]})
            if(guess == this.state.word){
                this.setState({guess: [],text: [this.state.guess] + c, completed: true,score: this.state.score + 1})
                }
            else{
                
                let shuf = _.shuffle(Array.from(this.state.word))
                this.setState({guess: [],text: [this.state.text]+c,chars : shuf, attempt: this.state.attempt + 1})
              }
        }
        else{
            
        }
        
           }

render() {
 return (

 <div>
     <img src={logo} alt="Logo" />;
     <p className = "App">Create by: Potsathorn Duangkaewjaroen 6010110237 section 01</p> 
     <p className = "App">ROUND : {this.state.attempt}/3  </p>      
     <p className = "App">YOUR WORD : {this.state.text}  </p>  
      
{ Array.from(this.state.chars).map((c, i) => 
<CharacterCard value={c} key={i} 
activationHandler={this.activationHandler}
attempt = {this.state.attempt}/>)}
<p className = "App">{this.state.completed? "YOU WIN!":""}</p> 
<p className = "App">{this.state.completed? "YOUR SCORE :"+this.state.score:""}</p> 
<p className = "App">{this.state.uncompleted&&!this.state.completed? "YOU LOST!":""}</p> 
<p className = "App">{this.state.uncompleted&&!this.state.completed? "YOUR SCORE :"+this.state.score:""}</p> 






 </div>
 );
 
 }
}
