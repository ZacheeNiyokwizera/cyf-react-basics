import React from 'react'

const Logo = () => {
 
    let appName = "Zach's Pokedex";

    return ( 
    <header>
       <h1>{appName}</h1>
     <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
  </header>
  )
}

export default Logo
