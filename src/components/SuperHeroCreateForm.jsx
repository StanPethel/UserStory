import React, { Component } from 'react';


class SuperHeroCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
          }
    }

    handleChange = (event) =>{
        this.setState({
        [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewHero(this.state)
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>
            <label>Hero Name</label>
            <input name="name" onChange={this.handleChange} value= {this.state.name}/>
            <label>Hero Power</label>
            <input name="HeroPower" onChange={this.handleChange} value={this.state.primaryAbility}/>
            <button type="submit">Create Hero</button>
        </form> 
        );
    }
}
 
export default SuperHeroCreator;