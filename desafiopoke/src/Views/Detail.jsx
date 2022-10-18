import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../layout/Container";
import Navbar from "../assets/css/Navbar.css"


export default function Detail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navitate = useNavigate()

  const Detail = async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await result.json();
    setPokemon(data);
  };

  useEffect(() => {
    Detail();
  }, [name]);

 const handleBack = () => {
  navitate(-1)
 }

  return (
    <Container>
    <div className="pokemonimg">
      {pokemon && (
        <>
          <div>
            <img src={pokemon.sprites.other.home.front_default} alt="" />
          </div>
          <div className="detail">
          <h1 className="text-3xl">{pokemon.name.toUpperCase()}</h1>
             <table className="">
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.stats?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.stat.name}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </>
      )}
    </div>
    </Container>
  );
};
