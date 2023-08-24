import Mole from './Mole'
import EmptySlot from './EmptySlot'
import { useState } from 'react'

const MoleContainer = (props) => {
    
    return (
        <div>
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