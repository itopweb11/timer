import React, {useState, useEffect} from 'react';
import './Timer.scss';

const Timer = () => {
    const [interval, funcInterval] = useState(0)
    const [inputDisabled, funcInputDisabled] = useState(false)

    const [seconds, setSeconds] = useState(0)

    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')

    const getHours = () => Math.floor(seconds / 3600)
    const getMinutes = () => Math.floor((seconds - getHours() * 3600) / 60)
    const getSeconds = () => seconds - getHours() * 3600 - getMinutes() * 60

    const subtract = () => setSeconds(seconds => seconds - 1 === 0 ? 0 : seconds - 1);
    const handleClick = () => {
        const intervalId = setInterval(subtract, 1000)
        funcInterval(intervalId)
        funcInputDisabled(true)
    }

    useEffect(() => {
        setSeconds(hours * 3600 + minutes * 60)
    }, [hours, minutes])

    useEffect(() => {
        if (seconds === 0) {
            funcInputDisabled(false)
            clearInterval(interval)
        }
    }, [seconds, interval])

    useEffect(() => {
        return () => {
            funcInputDisabled(false)
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='content'>
            <div className='content__desc'>
                <div className='content__button'>
                    <div className='content__button__time'>
                        <div className='content__button__time__input'>
                            <div>
                                <input
                                    onChange={e => setHours(e.target.value)}
                                    value={hours}
                                    type="number"
                                    disabled={inputDisabled}
                                    placeholder="hours"
                                />
                            </div>
                            <div><p>:</p></div>
                            <div>
                                <input
                                    onChange={e => setMinutes(e.target.value)}
                                    value={minutes}
                                    type="number"
                                    disabled={inputDisabled}
                                    placeholder="minutes"
                                />
                            </div>
                        </div>
                        <p>TIME</p>
                        <button onClick={handleClick} disabled={inputDisabled || !seconds}>START</button>
                    </div>
                </div>
            </div>
            <div className='content__elements'>
                <div className='content__elements__hours'>
                    <h2>{getHours()}</h2>
                    <p>HOURS</p>
                </div>
                <div className='content__elements__minutes'>
                    <h2>{getMinutes()}</h2>
                    <p>MINUTES</p>
                </div>
                <div className='content__elements__seconds'>
                    <h2>{getSeconds()}</h2>
                    <p>SECONDS</p>
                </div>
            </div>
        </div>
    );
}


export default Timer;
