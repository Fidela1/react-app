import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
state = {
  Persons: [
    {name: 'smith', age: 50},
    {name:'Fidela', age:19},
  ], otherState: 'Some other value'
}

switchNameHandler = () => {
  // console.log('Was Clicked')
  // this.state.Persons[0].name = 'Fidela' Don't do this
  this.setState({
    persons:[
    {name: 'smith', age: 22},
    {name:'Fidela', age:19},
  ]
})
}
  render() {
    return (
      <div className="App">
       <h1>Hi, I'm React App</h1>
       <p>This is Really working!</p>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age} />
       <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}> My Hobbies: Racing </Person>
       
      </div>
    );

    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?') )
  }
}

export default App;
