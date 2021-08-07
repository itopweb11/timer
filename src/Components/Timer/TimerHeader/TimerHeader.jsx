import React,{useState, useEffect} from 'react';
import '../Timer.scss';

const TimerHeader = (props) => {
    const [inputDisabled, funcInputDisabled] = useState(false)

    const changeActive = (active, disabled) => {
        props.setActive(active)
        funcInputDisabled(disabled)
    }

    const handlePlay = () => changeActive('play', true)
    const handleStop = () => changeActive('stop', false)
    const handleDelete = () => {
        changeActive('delete', false)
        props.setHours('')
        props.setMinutes('')
    }

    useEffect(() => {
        return () => funcInputDisabled(false)
    }, [])

    return (
        <div className='content'>
            <div className='content__desc'>
                <div className='content__button'>
                    <div className='content__button__time'>
                        <div className='content__button__time__input'>
                            <div>
                                <input
                                    onChange={e => props.setHours(e.target.value)}
                                    value={props.hours}
                                    type="number"
                                    disabled={inputDisabled}
                                    placeholder="hours"
                                />
                            </div>
                            <div><p>:</p></div>
                            <div>
                                <input
                                    onChange={e => props.setMinutes(e.target.value)}
                                    value={props.minutes}
                                    type="number"
                                    disabled={inputDisabled}
                                    placeholder="minutes"
                                />
                            </div>
                        </div>
                        <p>TIME</p>
                        <div className='buttons'>
                            <button onClick={handlePlay} disabled={inputDisabled} ><img src="//im0-tub-ru.yandex.net/i?id=6e92a67040b44f349485085c490923bb&amp;n=13&amp;exp=1" alt="ply"/></button>
                            <button onClick={handleStop} ><img src="//im0-tub-ru.yandex.net/i?id=b39943b512f671d243214f92a753711d&amp;n=13&amp;exp=1" alt="stop"/></button>
                            <button onClick={handleDelete}><img src="https://www.testoitalia.live/wp-content/uploads/2020/03/xx.png" alt="delete"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimerHeader;