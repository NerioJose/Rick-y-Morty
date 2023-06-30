import React from 'react';
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
   const { onSearch } = props;
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.container}>
         <input
            type="search"
            placeholder="Ingrese el ID"
            onChange={handleChange}
            value={id}
         />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
