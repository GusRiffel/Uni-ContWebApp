import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../services/firebase/auth";

import useCrud from "../../services/firebase/useCrud";
import alarm from "../../assets/16900_1461333025.mp3";
import SetTimeModal from "../SetTimeModal";
import { Howl } from "howler";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sound = new Howl({
  src: alarm,
});

function convertSecondsToMinutes(secondsTotal) {
  const minutes = Math.floor(secondsTotal / 60);
  const seconds = secondsTotal % 60;

  return `
  ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function Timer() {
  const [timeInSeconds, setTimeInSeconds] = useState(1500);
  const [hasStarted, setHasStart] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(true);
  const [isShortBreak, setIsShortBreak] = useState(false);
  const [isLongBreak, setIsLongBreak] = useState(false);
  const { createPomodoroDetails } = useCrud();
  const { currentUser } = useContext(AuthContext);
  const [pomodoroTime, setPomodoroTime] = useState(25);

  useEffect(() => {
    if (timeInSeconds === 0) {
      sound.play();
      handleSavePomodoroDetails();
      if (isPomodoro) {
        toast.success("Pomodoro Completed, Its time for a break", {
          position: toast.POSITION.TOP_CENTER,
        });
        handleBreakTime(5);
      } else {
        toast.warning("End of the break, Its time to focus again", {
          position: toast.POSITION.TOP_CENTER,
        });
        handlePomodoroTime(25);
      }
      return;
    }
    if (hasStarted) {
      const interval = setInterval(() => {
        setTimeInSeconds(timeInSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timeInSeconds, hasStarted]);

  async function handleSavePomodoroDetails() {
    if (currentUser && isPomodoro) {
      await createPomodoroDetails({ uid: currentUser.uid, time: pomodoroTime });
    }
  }

  function handlePomodoroTime(time) {
    setPomodoroTime(time);
    setIsPomodoro(true);
    setIsShortBreak(false);
    setIsLongBreak(false);
    setTimeInSeconds(time * 60);
    setHasStart(false);
  }

  function handleBreakTime(time) {
    setTimeInSeconds(time * 60);
    setIsPomodoro(false);
    setHasStart(false);
    if (time === 5) {
      setIsShortBreak(true);
      setIsLongBreak(false);
    } else {
      setIsShortBreak(false);
      setIsLongBreak(true);
    }
  }

  function handleSetPomodoroTime(data) {
    setPomodoroTime(data.time);
    setTimeInSeconds(data.time * 60);
  }

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="mt-10 mx-auto flex flex-col justify-between w-[42.5rem] h-[27.5rem] border-2 border-[#304D63] bg-white rounded">
        <div className="flex pt-4 w-full justify-around">
          <div
            className={`${
              isPomodoro
                ? " text-[#436986] border-2 border-[#436986]  bg-white"
                : "text-white  bg-[#436986] hover:text-[#436986] border-2 hover:border-[#436986]  hover:bg-white "
            } text-lg font-bold rounded`}
          >
            <button className="px-3" onClick={() => handlePomodoroTime(25)}>
              Pomodoro
            </button>
          </div>
          <div
            className={`${
              isShortBreak
                ? " text-[#436986] border-2 border-[#436986]  bg-white"
                : "text-white  bg-[#436986] hover:text-[#436986] border-2 hover:border-[#436986]  hover:bg-white "
            } text-lg font-bold rounded`}
          >
            <button className="px-3" onClick={() => handleBreakTime(5)}>
              Short Break
            </button>
          </div>
          <div
            className={`${
              isLongBreak
                ? " text-[#436986] border-2 border-[#436986]  bg-white"
                : "text-white  bg-[#436986] hover:text-[#436986] border-2 hover:border-[#436986]  hover:bg-white "
            } text-lg font-bold rounded`}
          >
            <button className="px-3" onClick={() => handleBreakTime(15)}>
              Long Break
            </button>
          </div>
        </div>

        <div className="flex justify-center text-[10rem] text-[#304D63] font-bold">
          <h1>{convertSecondsToMinutes(timeInSeconds)}</h1>
        </div>

        <div className="flex  pb-4 w-full justify-evenly">
          <div className="w-36 text-lg text-center text-white font-bold bg-green-700 hover:bg-green-500 rounded">
            <button
              className="w-full inline-block"
              onClick={() => setHasStart(true)}
            >
              Start
            </button>
          </div>
          <div>
            {isPomodoro && (
              <SetTimeModal
                isPomodoro={isPomodoro}
                onSubmit={handleSetPomodoroTime}
                className="hover:bg-blue-100 rounded"
              />
            )}
          </div>
          <div className="w-36 text-center text-lg text-white font-bold bg-red-700 hover:bg-red-500 rounded">
            <button
              className="w-full inline-block"
              onClick={() => setHasStart(false)}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
