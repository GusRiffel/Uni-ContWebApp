import { useState, useEffect } from "react";

function Timer() {
  let [time, setTime] = useState("22:00");
  let [start, setStart] = useState(false);

  useEffect(() => {
    let interval = null;
    if (start) {
      let timeToSplit = time;
      let timeSplitted = timeToSplit.split(":");
      let timeToCalc = {
        minutes: parseInt(timeSplitted[0]),
        seconds: parseInt(timeSplitted[1]),
      };
      if (timeToCalc.seconds === 0) {
        timeToCalc.minutes = timeToCalc.minutes - 1;
        timeToCalc.seconds = 60;
        interval = setInterval(() => {
          setTimeFormatted(timeToCalc.minutes, timeToCalc.seconds - 1);
        }, 1000);
      } else {
        interval = setInterval(() => {
          setTimeFormatted(timeToCalc.minutes, timeToCalc.seconds - 1);
        }, 1000);
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, time]);

  const setTimeFormatted = (min, sec) => {
    let timeToBeFormatted = {
      minutes: min,
      seconds: sec ? sec : 0,
    };
    let timeFormatted = formatTime(timeToBeFormatted);
    if (timeToBeFormatted.minutes >= 0) {
      setTime(timeFormatted);
    }
    return timeFormatted;
  };

  const formatTime = (timeObject) => {
    return (
      (timeObject.minutes > 9 ? timeObject.minutes : "0" + timeObject.minutes) +
      ":" +
      (timeObject.seconds > 9 ? timeObject.seconds : "0" + timeObject.seconds)
    );
  };

  return (
    <div>
      <button onClick={() => setTimeFormatted(25)}>Pomodoro</button>
      <button onClick={() => setTime(5)}>Short Break</button>
      <button onClick={() => setTime(15)}>Long Break</button>
      <h1>{time}</h1>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => setStart(false)}>Stop</button>
    </div>
  );
}

export default Timer;
