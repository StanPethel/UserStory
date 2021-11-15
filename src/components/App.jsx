import React, {Component} from 'react';
import './App.css';


class App extends Component{
  state = {
      superheroes: [
        {
            superheroId: 1,
          name: "Batman",
          primaryAbility: "Wealthy",
          secondaryAbility: "Rich"
        },
        {
            superheroId: 2,
          name: "Superman",
          primaryAbility: "Super Strength",
          secondaryAbility: "Fly"
        },
        {
            superheroId: 3,
          name: "Spiderman",
          primaryAbility: "Spider senses",
          secondaryAbility: "Shoots web"
        }
    ]
};
          
 render(){
    return(
        <div className= "App">
          <h1> My React App from Component Worksheet</h1>
          <h2>Click to add a name to the list</h2>
          <SuperheroTable superheroes={this.state.superheroes}/>
          {/* <button onClick={this.addName}>Add Name</button> */}
          </div>  
        )
    }
}

export default App;