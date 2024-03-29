import React from 'react';
import style from './Card.module.css';

export default function Card({name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.card}>
         <button className={`${style.button} button`} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt="Rick y Morty" />
      </div>
   );
}


