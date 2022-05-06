import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Table from './Table';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [query, setQuery] = useState("")

  const keys = ["name", "url"]

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300') 
      setPokemons(res.data.results)      
    }    
    fetchPokemon()
  }, [])

  const search = (data) => {
    return data.filter((item) => 
      keys.some(key => item[key].toLowerCase().includes(query))
    )
  }

  return ( 
    <div className="App">
      <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)} />

      <Table data={search(pokemons)} />
    </div>
  );
}

export default App;
