import React, {useState, useEffect} from 'react';
import '../Timer.scss';

const TimerDesc = (props) => {

    const getHours = () => Math.floor(props.seconds / 3600)
    const getMinutes = () => Math.floor((props.seconds - getHours() * 3600) / 60)
    const getSeconds = () => props.seconds - getHours() * 3600 - getMinutes() * 60

    useEffect(() => {
        props.setSeconds(props.hours * 3600 + props.minutes * 60)
    }, [props.hours, props.minutes])

    useEffect(() => {
        if (props.seconds === 0) clearInterval(props.interval)
    }, [props.seconds, props.interval])

    useEffect(() => {
        return () => clearInterval(props.interval)
    }, [])

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