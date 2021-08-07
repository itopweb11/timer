import React, {useState} from 'react';
import TimerHeader from "./TimerHeader/TimerHeader";
import TimerDesc from "./TimerDesc/TimerDesc";

const Timer = () => {

    const [seconds, setSeconds] = useState(0)
    const [hours, setHours] = useState(10)
    const [minutes, setMinutes] = useState(5)
    const [interval, funcInterval] = useState(0)

    return (
        <div className='content'>
            <TimerHeader hours={hours}
                         setHours={setHours}
                         minutes={minutes}
                         setMinutes={setMinutes}
                         interval={interval}
                         funcInterval={funcInterval}
                         setSeconds={setSeconds}
            />
            <TimerDesc hours={hours}
                       minutes={minutes}
                       interval={interval}
                       funcInterval={funcInterval}
                       seconds={seconds}
                       setSeconds={setSeconds}
            />
        </div>
    );
}


export default Timer;
