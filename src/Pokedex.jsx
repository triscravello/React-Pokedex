import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

// Pokedex is provided, via props, an array of objects describing different Pokemon, and renders a equence of Pokecard components.

function Pokedex ({pokemon, exp, isWinner}) {
    return (
        <div className="pokedex">
            <h2>Total EXP: {exp}</h2>
            <div className="pokedex-cards">
                {pokemon.map((p) => (
                <Pokecard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience}
                />
            ))}

            </div>
            <h3 className="winner-message">
                {isWinner ? 'THIS HAND WINS!' : ''}
            </h3>
        </div>
    );
}

export default Pokedex;