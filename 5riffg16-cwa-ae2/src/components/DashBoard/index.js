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
  }, [])

  async function getPomodoroInfo() {
    const pomo = await getPomodoroByUserId(currentUser.uid)
    console.log(pomo);
    setPomoInfo(pomo);
  }


  return (
    <div>
      {/* {pomoInfo.length} */}
      {pomoInfo.map((pomo) => pomo.time).reduce((total, currentTime) => total += currentTime, 0)}
    </div>

  )
}

export default DashBoard;
