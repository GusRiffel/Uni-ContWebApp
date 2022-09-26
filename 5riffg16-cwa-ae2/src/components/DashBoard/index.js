import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../services/firebase/auth";
import useCrud from "../../services/firebase/useCrud";

function DashBoard() {
  const [pomoInfo, setPomoInfo] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { getPomodoroByUserId } = useCrud();

  useEffect(() => {
    getPomodoroInfo();
  }, []);

  async function getPomodoroInfo() {
    const pomo = await getPomodoroByUserId(currentUser.uid);
    setPomoInfo(pomo);
  }

  return (
    <div>
      <div>
        <p className="mt-5 text-2xl">
          “Continuous Effort, not strength or intelligence, is the key to
          unlocking our potential.” – Winston Churchill
        </p>
      </div>
      <div>
        <p className="mt-7 text-lg">
          Your effort is of extreme importance to us, and that is why our database keeps track of your records. See below the breakdown of your studies so far.
        </p>
      </div>
      <div className="mt-4 text-xl font-semibold">
        <div>Pomodoros Completed</div>
        <div>{pomoInfo.length}</div>
      </div>
      <div className="mt-4 text-xl font-semibold">
        <div>Minutes focused</div>
        <div>{pomoInfo
        .map((pomo) => pomo.time)
        .reduce((total, currentTime) => (total += currentTime), 0)}</div>
      </div>
      
    </div>
  );
}

export default DashBoard;
