import React from 'react'

const CaughtPokemon = () => {

    let date = new Date().toLocaleDateString()

  return (
    <div>
      <p>Caught 0 pokemon on {date}</p>
    </div>
  )
}

export default CaughtPokemon
