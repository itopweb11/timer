import React,{useState} from 'react';
import className from './Timer.module.css';


const Timer = () => {

    const [seconds, setSeconds] = useState(0)

    const getHours = () => Math.floor(seconds / 3600)
    const getMinutes = () => Math.floor((seconds - getHours() * 3600) / 60)
    const getSeconds = () =>  seconds - getHours() * 3600 - getMinutes() * 60

    const subtract = () => setSeconds(seconds => seconds - 1);
    const  handleClick =()=> setInterval(() => subtract() , 1000);

    return (
        <div className={className.content}>
            <div className={className.content__button}>
                <div className={className.content__button__time}>
                    <input onChange={e => setSeconds(e.target.value)} type="number"/>
                    <p>TIME</p>
                    <button onClick={handleClick}>START</button>
                </div>
            </div>
            <div className={className.content__elements}>
                <div className={className.content__elements__hours}>
                    <h2>{getHours()}</h2>
                    <p>HOURS</p>
                </div>
                <div className={className.content__elements__minutes}>
                    <h2>{getMinutes()}</h2>
                    <p>MINUTES</p>
                </div>
                <div className={className.content__elements__seconds}>
                    <h2>{getSeconds()}</h2>
                    <p>SECONDS</p>
                </div>
            </div>
        </div>
    );
}


export default Timer;
