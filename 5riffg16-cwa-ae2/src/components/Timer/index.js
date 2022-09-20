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
    <div className="mt-10 mx-auto flex flex-col justify-between w-[42.5rem] h-[27.5rem] border-2 border-[#304D63] bg-white rounded">

      <div className="flex pt-4 w-full justify-around">
        <div className="text-lg text-white font-bold bg-[#436986] rounded">
          <button className="px-3" onClick={() => setTimeFormatted(25)}>
            Pomodoro
          </button>
        </div>
        <div className="text-lg text-white font-bold bg-[#436986] rounded">
          <button className="px-3" onClick={() => setTime(5)}>
            Short Break
          </button>
        </div>
        <div className="text-lg text-white font-bold bg-[#436986] rounded">
          <button className="px-3" onClick={() => setTime(15)}>
            Long Break
          </button>
        </div>
      </div>

      <div className="flex justify-center text-[10rem] text-[#304D63] font-bold">
        <h1>{time}</h1>
      </div>

      <div className="flex  pb-4 w-full justify-evenly">
        <div className="w-36 text-lg text-center text-white font-bold bg-green-700 rounded">
          <button onClick={() => setStart(true)}>Start</button>
        </div>
        <div className="w-36 text-center text-lg text-white font-bold bg-red-700 rounded">
          <button onClick={() => setStart(false)}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
