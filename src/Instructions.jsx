// src/Instructions.jsx
import React from "react";
import './Instructions.css';

function Instructions() {
    return (
        <div className="instructions">
            <h2>How to Play</h2>
            <p>
                Each player gets a hand of random Pokemon. <br />
                The hand with the highest total <strong>Base Experience</strong> wins! <br />
                ✨ Legendary Pokémon may randomly appear for extra power! <br />
                Press "🎲 Roll Again" to deal new hands and see if you can beat the odds! <br />
            </p>
        </div>
    );
}

export default Instructions;