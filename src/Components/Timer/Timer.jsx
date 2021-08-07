import React, {useState} from 'react';
import TimerHeader from "./TimerHeader/TimerHeader";
import TimerDesc from "./TimerDesc/TimerDesc";

const Timer = () => {
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [active, setActive] = useState('delete')

    return (
        <div className='content'>
            <TimerHeader hours={hours} setHours={setHours} minutes={minutes} setMinutes={setMinutes} setActive={setActive} active={active}/>
            <TimerDesc hours={hours} minutes={minutes} active={active}/>
        </div>
    );
}

export default Timer;