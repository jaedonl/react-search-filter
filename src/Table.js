import {useState, useEffect} from 'react'
import axios from 'axios'

const Table = ({data}) => {
    const [pokemons, setPokemons] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchPokemon = async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=300') 
        setPokemons(res.data.results)      
    }    
    fetchPokemon()
    }, [])

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>URL</th>                           
                </tr>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table