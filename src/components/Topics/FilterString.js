import React, {Component} from 'react'


export default class FilterString extends Component {

  constructor(){
    super()
    this.state = {
      unFilteredArray: ["blah", "blah blah", "test", "test 2", "test 3", "blah test"],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  filterString(userInput){
    let arr = this.state.unFilteredArray
    let filteredArr = arr.filter(word =>{
      return word.includes(userInput)
    })

    this.setState({filteredArray: filteredArr})
  }

  render(){
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input className="inputLine"
        onChange={e =>{
          this.handleChange(e.target.value)
        }}></input>
        <button className="confirmationButton"
        onClick={() => {
          this.filterString(this.state.userInput)
        }}>Filter</button>
        <span className="resultsBox filterStringRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    )
  }
}