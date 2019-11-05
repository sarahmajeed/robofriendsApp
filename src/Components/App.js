import React, { Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from'./robots';

//Object that describes application(able to change)

class App extends Component {
  constructor(){
    super()
    this.state = {
     robots: robots,
     searchField: ""
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      searchField:event.target.value
    })
  }
  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div>
         <h1 className='tc'>RoboFriends</h1>
         <SearchBox handleChange={this.handleChange}/>
        <CardList robots={filteredRobots}/> 
      </div>
     );
  }
    
}


export default App;