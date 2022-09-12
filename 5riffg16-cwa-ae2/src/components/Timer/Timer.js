import {useState, useEffect} from 'react';

function Timer() {
    let [time, setTime] = useState(5);
    let [start, setStart] = useState(false);

    useEffect(() => {
        if (start) {
            let interval = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000);
        }
    }, [start]);

    return (
        <div>
            <p>{time}</p>
            <button onClick={() => {
                setStart(true)
            }}>Start
            </button>
        </div>
    );
}

export default Timer;