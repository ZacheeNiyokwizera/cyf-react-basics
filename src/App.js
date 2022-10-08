import  './App.css'; 
import BestPokemon from './BestPokemon'; 
import CaughtPokemon from './CaughtPokemon';
import Logo from './Logo';
import ParentComp from './Test';

function App() {
  return (
    <>
    <Logo />

    <ParentComp />
    <BestPokemon />
    <CaughtPokemon />
    </>
  );
  }

export default App;
