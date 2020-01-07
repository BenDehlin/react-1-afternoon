import React, {Component} from 'react'


export default class Sum extends Component {

  constructor(){
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  updateOne(val){
    this.setState({number1: val})
  }
  updateTwo(val){
    this.setState({number2: val})
  }

  sum(val1, val2){
    let sum = parseInt(val1) + parseInt(val2)
    this.setState({sum: sum})
  }

  render(){
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input className="inputLine"
        onChange={e => {
          this.updateOne(e.target.value)
        }}></input>
        <input className="inputLine"
        onChange={e => {
          this.updateTwo(e.target.value)
        }}></input>
        <button className="confirmationButton"
        onClick={() => {
          this.sum(this.state.number1, this.state.number2)
        }}>Add It</button>
        <span className="resultsBox">
          {this.state.sum}
        </span>
      </div>
    )
  }
}