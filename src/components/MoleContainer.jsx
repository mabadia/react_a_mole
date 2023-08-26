import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer;


// { score, setScore }
// const [displayMole, setDisplayMole] = useState(false);

// const handleClick = () => {
//     setScore(score + 1);
//     setDisplayMole(false);
// }
// const moleComponent = displayMole ? <Mole handleClick={handleClick} /> : <EmptySlot />;
// return (
//     <div>
//         {moleComponent}
//     </div>
// );