import React from 'react';

const SuperheroTable =(props) => {
    console.log(props);
    let renderedHeroes = props.superheroes.map(hero =>{
        return(
            <tr>
                <td>{hero.name}</td>
                <td>{hero.primaryAbility}</td>
                <td>{hero.secondaryAbility}</td>
            </tr>
        )
    })
    return(
      <table>
        <tr>
          <th>Name</th>
          <th>Primary Ability</th>
          <th>Secondary Ability</th>
        </tr>
         {renderedHeroes}
    </table>
    )
};
export default SuperheroTable;