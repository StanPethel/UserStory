import './App.css';
import React, {Component} from 'react';
import SuperheroTable from './displayName/SuperheroTable';
import SuperHeroCreator from './SuperHeroCreateForm';

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
   
SuperHeroCreator = (newHero) => {
  console.log("from the createHero on App component", newHero);
  this.push(newHero);
  this.setState({
      superheroes: this.superheroes.length -1
  });
}


render(){
    return(
        <div className= "App">
          <h1> My React App from Component Worksheet</h1>
          <button>Click to add a name to the list</button>
          <SuperheroTable superheroes={this.state.superheroes}/>
          <SuperHeroCreator createNewHero={this.SuperHeroCreator}/>
          </div>  
        )
    }
}

export default App;