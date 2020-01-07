import React, {Component} from 'react'


export default class Palindrome extends Component {

  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: false
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  palindrome(userInput){
    let arr = userInput.split('')
    let bool = true
    arr.forEach((letter, index, array) =>{
      if(letter !== array[array.length-(1+index)]){
        bool = false
      }
    })
      this.setState({palindrome: bool})
  }
  render(){
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine"
        onChange={e =>{
          this.handleChange(e.target.value)
        }}></input>
        <button className="confirmationButton"
        onClick={() => {
          this.palindrome(this.state.userInput)
        }}>Do It</button>
        <span className="resultsBox">
          {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    )
  }
}