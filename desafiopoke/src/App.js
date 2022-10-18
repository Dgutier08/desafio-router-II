import { BrowserRouter, Route, Routes } from "react-router-dom"
//import { useEffect, useState } from "react"

import Navbar from "./components/Navbar";
import Home from "./Views/Home";
import Pokemones from "./Views/Pokemones";
import Detail from "./Views/Detail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
