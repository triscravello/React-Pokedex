import React from 'react';
import Pokedex from './Pokedex';

function Pokegame() {
    const pokemon = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112}, 
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ];

    const LEGENDARIES = [
        {id: 150, name: 'Mewtwo', type: 'psychic', base_experience: 306},
        {id: 151, name: 'Mew', type: 'psychic', base_experience: 270},
        {id: 144, name: 'Articuno', type: 'ice/flying', base_experience: 261},
        {id: 145, name: 'Zapdos', type: 'electric/flying', base_experience: 261},
        {id: 146, name: 'Moltres', type: 'fire/flying', base_experience: 261},
        {id: 243, name: 'Raikou', type: 'electric', base_experience: 261},
        {id: 244, name: 'Entei', type: 'fire', base_experience: 261},
        {id: 245, name: 'Suicune', type: 'water', base_experience: 261}
    ];

    // 10% chance to roll a legendary Pokemon in the game
    const rollLegendary = Math.random() < 0.10;

    let gamePool = [...pokemon];

    if (rollLegendary) {
        const randomLegend = LEGENDARIES[Math.floor(Math.random() * LEGENDARIES.length)];
        gamePool.push(randomLegend);
    }

    // Create two hands by randomly distributing the Pokemon 
    let hand1 = [];
    let hand2 = [...gamePool];

    while (hand1.length < Math.floor(gamePool.length / 2)) {
        const randIdx = Math.floor(Math.random() * hand2.length);
        const randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }

    const exp1 = hand1.reduce((exp, p) => exp + p.base_experience, 0);
    const exp2 = hand2.reduce((exp, p) => exp + p.base_experience, 0);

    return (
        <div className="pokegame">
            {rollLegendary && <h2>✨ Legendary Appeared! ✨</h2>}
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
        </div>
    );
}

export default Pokegame;