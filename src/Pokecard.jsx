import React from 'react';
import "./Pokecard.css";

// Shows a single Pokemon, with their name, image, and type.

function Pokecard ({id, name, type, base_experience}) {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="pokecard">
            <h2 className="pokecard-name">{name}</h2>
            <img className="pokecard-image" src={image} alt={name}></img>
            <p className="pokecard-type">Type: {type}</p>
            <p className="pokecard-base_experience">EXP: {base_experience}</p>
        </div>
    );
}

export default Pokecard;