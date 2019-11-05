import React, { Component} from 'react';
import '../App.css'
import CardList from './CardList';
import SearchBox from './SearchBox';


//Object that describes application(able to change)

class App extends Component {
  constructor(){
    super()
    this.state = {
     robots: [],
     searchField: ""
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      searchField:event.target.value
    })
  }
  componentDidMount () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(users=>{
        this.setState({
          robots:users
        })
      })
  }
  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
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