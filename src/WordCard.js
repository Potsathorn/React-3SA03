import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash'; 


const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
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
                this.setState({uncompleted: true})
            }
            this.setState({text: [this.state.guess]})
            if(guess == this.state.word){
                this.setState({guess: [],text: [this.state.guess] + c, completed: true})
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
     <p>ROUND : {this.state.attempt}/3  </p>      
     <p>YOUR WORD : {this.state.text}  </p>  
      
{ Array.from(this.state.chars).map((c, i) => 
<CharacterCard value={c} key={i} 
activationHandler={this.activationHandler}
attempt = {this.state.attempt}/>)}
<p>{this.state.completed? "YOU WIN!":""}</p> 
<p>{this.state.uncompleted? "YOU LOST!":""}</p> 






 </div>
 );
 
 }
}
