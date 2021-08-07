import React, {useState, useEffect} from 'react';
import '../Timer.scss';

const TimerDesc = (props) => {

    const [seconds, setSeconds] = useState(0)
    const [interval, funcInterval] = useState(0)

    const getHours = () => Math.floor(seconds / 3600)
    const getMinutes = () => Math.floor((seconds - getHours() * 3600) / 60)
    const getSeconds = () => seconds - getHours() * 3600 - getMinutes() * 60

    const subtract = () => setSeconds(seconds => seconds - 1 === 0 ? 0 : seconds - 1);

    const clearIntervals = () => {
        clearInterval(interval)
        funcInterval(0)
    }

    useEffect(() => {
        setSeconds(props.hours * 3600 + props.minutes * 60)
    }, [props.hours, props.minutes])

    useEffect(() => {
        if (seconds === 0) clearIntervals()
    }, [seconds, interval])

    useEffect(() => {
        return () => clearIntervals()
    }, [])

    useEffect( () => {
        if (props.active === 'play') {
            const intervalId = setInterval(subtract, 1000)
            funcInterval(intervalId)
        }
        if (props.active === 'delete') clearIntervals()
        if (props.active === 'stop') clearIntervals()
    },[props.active])

    return (
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
    )
}

export default TimerDesc;