import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
    let [score, setScore] = useState(0)
    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                    key= {i}
                    setScore={setScore}
                    score={score} />
            )
        }
        return (
            <div>
                {hills}
            </div>
        )
    }
    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {moleContainers}
        </div>
    )
};

export default App;



// const [score, setScore] = useState(0);
// const numMoleContainers = 9;

// const moleContainers = Array.from({ length: numMoleContainers }).map((_, index) => (
//     <MoleContainer
//         key={index}
//         setScore={setScore}
//         score={score}
//     />
// ));
