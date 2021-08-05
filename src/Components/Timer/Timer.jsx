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

    const stop = () => {
        clearInterval(interval)
        funcInputDisabled(false)
    }

    const funcDelete = () => {
        funcInterval(0)
        funcInputDisabled(false)
        setSeconds(0)
        setHours('')
        setMinutes('')
        clearInterval(interval)
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
                        <div className='buttons'>
                            <button onClick={handleClick} disabled={inputDisabled || !seconds} ><img src="//im0-tub-ru.yandex.net/i?id=6e92a67040b44f349485085c490923bb&amp;n=13&amp;exp=1" alt="ply"/></button>
                            <button onClick={stop} ><img src="//im0-tub-ru.yandex.net/i?id=b39943b512f671d243214f92a753711d&amp;n=13&amp;exp=1" alt="stop"/></button>
                            <button onClick={funcDelete}><img src="https://www.testoitalia.live/wp-content/uploads/2020/03/xx.png" alt="delete"/></button>
                        </div>
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
