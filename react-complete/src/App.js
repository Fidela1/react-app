import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
state = {
  persons: [
    { name: 'ange', age: 50 },
    { name: 'Fidela', age: 19 },
  ],
  otherState: 'Some other value'
};

switchNameHandler = (newName) => {
  // console.log('Was Clicked')
  // this.state.Persons[0].name = 'Fidela' Don't do this

  this.setState({
    persons: [
      { name: newName, age: 22 },
      { name: 'Fidela', age: 19 },
    ],
  })
}

nameChangeHandler = (event) => {
  this.setState({
    persons: [
      { name: 'Max', age: 92 },
      { name: event.target.value, age: 19 },
    ],
  })
}

render () {
  const style = {
  backgroundColor:'red',
  font:'inherit',
  border:'1px solid blue',
  padding:'8px',
  cursor:'pointer'
  }
  return (
    <div className="App">
      <h1>Hi, I'm React App</h1>
      <p>This is Really working!</p>
      <button 
      style={style}
      onClick={() => this.switchNameHandler('james!!')}>Switch Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Max')} 
        changed={this.nameChangeHandler}> My Hobbies: Racing </Person>
    </div>
  );
}
}
// return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work now?') )


export default App;

