import pokebola from "../assets/pokebola.gif"
import React from 'react'
import Container from '../layout/Container'
import Navbar from "../assets/css/Navbar.css"


export default function Home() {
  return (

      <div className="home">
        <h1 className="welcome">Bienvenido maestro Pokemón</h1>
      
        <img className="gif"
         src={pokebola}
        />
    </div>
  
  )
}

