import { useState, useEffect } from "react";
import alarm from "../../assets/16900_1461333025.mp3";
import {Howl, Howler} from 'howler';

const sound = new Howl({
  src: alarm
});


function convertSecondsToMinutes(secondsTotal) {
  const minutes = Math.floor(secondsTotal / 60);
  const seconds = secondsTotal % 60;

  return `
  ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState(1200);
  const [hasStarted, setHasStart] = useState(false);

  useEffect(() => {
    if (timeInSeconds === 0) {
      sound.play()
      return
    }
    if (hasStarted) {
      const interval = setInterval(() => {
        setTimeInSeconds(timeInSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeInSeconds, hasStarted]);


  function handleTimeOption(time) {
    setTimeInSeconds(time * 60);
    setHasStart(false);
    
  }

  return (
    <div className="mt-10 mx-auto flex flex-col justify-between w-[42.5rem] h-[27.5rem] border-2 border-[#304D63] bg-white rounded">
      <div className="flex pt-4 w-full justify-around">
        <div className="text-lg text-white font-bold bg-[#436986] rounded">
          <button className="px-3" onClick={() => handleTimeOption(0.05)}>
            Pomodoro
          </button>
        </div>
        <div className="text-lg text-white font-bold bg-[#436986] rounded">
          <button className="px-3" onClick={() => handleTimeOption(5)}>
            Short Break
          </button>
        </div>
        <div className="text-lg text-white font-bold bg-[#436986] rounded">
          <button className="px-3" onClick={() => handleTimeOption(15)}>
            Long Break
          </button>
        </div>
      </div>

      <div className="flex justify-center text-[10rem] text-[#304D63] font-bold">
        <h1>{convertSecondsToMinutes(timeInSeconds)}</h1>
      </div>

      <div className="flex  pb-4 w-full justify-evenly">
        <div className="w-36 text-lg text-center text-white font-bold bg-green-700 rounded">
          <button onClick={() => setHasStart(true)}>Start</button>
        </div>
        <div className="w-36 text-center text-lg text-white font-bold bg-red-700 rounded">
          <button onClick={() => setHasStart(false)}>Stop</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
