import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Table from './Table';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300') 
      setPokemons(res.data.results)      
    }    
    fetchPokemon()
  }, [])

  const search = (data) => {
    // return data.filter(item )
  }

  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)} />

      <Table data={pokemons} />
      {/* <ul className="list">
        {pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query)).map((pokemon, idx) => (
          <li key={idx} className="listItem">{pokemon.name}</li>
        ))}                
      </ul> */}
    </div>
  );
}

export default App;
