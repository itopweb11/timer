import React, {useState} from 'react'
import './App.css';
import Timer from "./Components/Timer/Timer";

function App() {

    // const [number, setNumber] = useState(0)
    //
    // const addNumber = ()=> {
    //     if (number <= 10) {
    //         setNumber( number + 1)
    //     }
    // }
    //
    // const deleteNumber = ()=> {
    //     if (number > 0) {
    //         setNumber( number - 1)
    //     }
    // }

    return (
        <div className="App">
            {/*<button onClick={addNumber}>+</button>*/}
            {/*<span>{number}</span>*/}
            {/*<button onClick={deleteNumber}>-</button>*/}
            <Timer />
        </div>
    );
}

export default App;
