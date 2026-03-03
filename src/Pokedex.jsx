import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

// Pokedex is provided, via props, an array of objects describing different Pokemon, and renders a equence of Pokecard components.

function Pokedex ({pokemon, exp, isWinner, player}) {
    return (
        <div className={`pokedex ${isWinner ? 'winner' : ''}`}>
            <h2>{player}'s Hand</h2>
            <p>Total EXP: {exp}</p>
            <div className="pokedex-cards">
                {pokemon.map((p) => (
                <Pokecard
                    key={p.id}
                    {...p}
                />
            ))}

        </div>
        {isWinner && <h3 className='winner-message'>Winner! 🎉</h3>}
        </div>
    );
}

export default Pokedex;