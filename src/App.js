import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";


function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) { 
      if (characters.find(char => char.id === parseInt(id, 10))) {
         alert(`Ya existe el personaje con el ID ${id}`);
         return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters(oldChars => [...oldChars, data]);
            }
         })
         .catch(err => alert(err.response.data.error));
   } 
   
   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== parseInt(id, 10)));
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   ); 
}

export default App;




