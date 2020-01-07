import React, {Component} from 'react'


export default class FilterObject extends Component {

  constructor(){
    super()
    this.state = {
      unFilteredArray: [{
        firstName: 'Ben',
        lastName: 'Dehlin',
        age: 27,
        car: 'Honda'
      },{
        firstName: 'Liliana',
        lastName: 'Dehlin',
        age: 4,
        bike: 'Red'
      },{
        firstName: 'Bob',
        lastName: 'Smith',
        age: 40,
        car: 'Tesla'
      }
    
    ],
      userInput: '',
      filteredArray: []
    }
  }

  handleChange(val){
    this.setState({userInput: val})
  }

  filterArray(userInput){
    let people = this.state.unFilteredArray 

    let filteredPeople = people.filter(person =>{
      if(person.hasOwnProperty(userInput)){
        return person
      }
    })

    this.setState({filteredArray: filteredPeople})
  }
  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input className="inputLine"
        onChange={(e) => {
          this.handleChange(e.target.value)
        }}></input>
        <button className="confirmationButton"
        onClick={() => {this.filterArray(this.state.userInput)}}>Filter</button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    )
  }
}