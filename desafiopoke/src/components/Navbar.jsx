import { NavLink, Link } from 'react-router-dom';
import img from "../assets/pokemonIcon.png"
import Navbar from "../assets/css/Navbar.css"

export default function Navigation() {
    //const 'active' = "text-red-500 font medium"
    return (
        <div className="navbar">
          <div className="text-white font-normal flex w-40 justify-between">
            <img src={img} className="h-5" />
            </div>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? 'active' : 'red')}
                >Home
                </NavLink>
          
            <div className="text-white font-normal flex w-40 justify-between">
                <NavLink to="/Pokemones"
                    className={({ isActive }) => (isActive ? 'active' : 'red')}
                >Pokemones
                </NavLink>
            </div>
        </div>
    );
}
