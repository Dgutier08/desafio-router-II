import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Container from '../layout/Container';
import Form from 'react-bootstrap/Form';
import Navbar from "../assets/css/Navbar.css"


export default function Pokemones() {

    const [pokemons, setPokemons] = useState([])
    const [Select, setSelect] = useState("")
    const navigate = useNavigate()
    const url = "https://pokeapi.co/api/v2/pokemon"

    const pokemonList = async () => {
        const response = await fetch(url)
        const data = await response.json();
        //console.log(data.results)
        setPokemons(data.results)
    }
    const pokeinfo = () => {
        if (Select === "" || Select === "Pokemones") {
            alert("Debes elegir un pokemón");
            return
        }
        navigate(`/pokemones/${Select}`);
    }

    useEffect(() => {
        pokemonList()
    }, [])
 
    return (      
   <Container>
            <div className="select" >
                <h1 className="text-center text-3xl text-zinc-900">Selecciona un pokemon</h1>
               
                <select onChange={((e) => setSelect(e.target.value))} placeholder="Pokemones" className="caja">
                    <option value="" >Pokemones</option>
                    {pokemons.map(({ name }, i) => (
                        <option key={i} value={name}>{name}</option>
                    ))}
                </select>
                <br />
                 <button className="boton" onClick={pokeinfo}>Ver Detalles</button>
            </div>
            </Container>
    )
}
