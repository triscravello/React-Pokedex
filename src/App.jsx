import React, { useState } from 'react'
import Pokegame from './Pokegame'; 
import Instructions from './Instructions';
import './App.css';

function App () {
    const [gameId, setGameId] = useState(0);
    const [showInstructions, setShowInstructions] = useState(true);

    function refreshHand() {
        setGameId(prev => prev + 1);
    }

    return (
        <div className="App">
            <h1>Pokegame</h1>
            <button onClick={() => setShowInstructions(prev => !prev)}>
                {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
            </button>
            {showInstructions && <Instructions />}
            <button onClick={refreshHand}>
                🎲 Roll Again
            </button>

            {/* key forces full rerender */}
            <Pokegame key={gameId} />
        </div>
    );
}

export default App;
