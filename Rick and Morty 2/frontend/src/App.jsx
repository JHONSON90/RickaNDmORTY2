
/*import Nav from "./components/nav/Nav"
import Cards from "./components/cards/Cards";


import { useState } from "react";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom"

import axios from 'axios'
import './App.css'
import { Favorites } from "./components/favorites/Favorites";

function App() {
  const [characters, setCharacter] = useState([])


  const {pathname} = useLocation()
  


  const onSearch = async (id) => {
    try {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacter((oldChars) => [...oldChars, data])
          }
        })
    } catch (error) {
      alert(`No hay personajes con el id => ${id}`)
    }
  }

  return (
    <BrowserRouter>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/home" element={<Cards characters={characters} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
*/
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
//import { Favorites } from "./components/favorites/Favorites";
import Nav from "./components/nav/Nav";
import Cards from "./components/cards/Cards";
import Favorites from "./components/favorites/Favorites"

function App() {
  const [characters, setCharacter] = useState([]);
  //const { pathname } = useLocation();

  const onSearch = async (id) => {
    try {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacter((oldChars) => [...oldChars, data]);
          }
        });
    } catch (error) {
      alert(`No hay personajes con el id => ${id}`);
    }
  }

  const onClose = (id) => {
    setCharacter(
      characters.filter((character) => character.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;