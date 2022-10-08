import React from 'react';

const BestPokemon = () => {

let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];

    return (

<div>
    <p>My favorite Pokemon is Squirtle</p>

 <ul>{abilities.map(( ability, id ) => {
    return ( 
         
        <li key={id}>{ability}</li>


    )
    

 } )}</ul>

</div>


    );
}

export default BestPokemon;
