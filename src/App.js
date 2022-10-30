import React from 'react'
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import {robots} from "./robots"
import './App.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFilter: ''
    }
  }

  updateSearchFilter = (event) => {
    this.setState({
      searchFilter: event.target.value,
      })
    console.log(this.state, event.target.value)
  }

  render(){
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchFilter.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className="">RoboFriends</h1>
        <SearchBox updateSearchFilter={this.updateSearchFilter}/>
        <CardList robots={filteredRobots}/>
    </div>
    )
  }
}

export default App