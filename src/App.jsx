import React, { useState } from 'react'
import Pokegame from './Pokegame'; 
// import './App.css';

function App () {
    const [gameId, setGameId] = useState(0);

    function refreshHand() {
        setGameId(prev => prev + 1);
    }

    return (
        <div className="App">
            <h1>Pokegame</h1>
            <button onClick={refreshHand}>
                🎲 Roll Again
            </button>

            {/* key forces full rerender */}
            <Pokegame key={gameId} />
        </div>
    );
}

export default App;
