import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../services/firebase/auth";

function Header() {
  const { currentUser, signUserOut } = useContext(AuthContext);

  function handleSingUserOut() {
    signUserOut();
  }

  return (
    <div className="w-full flex justify-around items-center mx-auto py-8 bg-[#304D63]">
      <div className="w-48 text-center text-lg text-white font-bold bg-[#436986] rounded">
        <Link to="about" className="p-3">
          What Is Pomodoro?
        </Link>
      </div>
      <div className="w-48 text-center text-lg text-white font-bold bg-[#436986] rounded">
        <Link to="/" className="p-3">
          It's Time to Focus
        </Link>
      </div>

      {currentUser ? (
        <div className="flex">
          <div className="text-center text-lg text-white font-bold bg-[#436986] rounded">
          <Link to="/dashboard" className="p-3">DashBoard</Link>
          </div>
          <div className="text-white font-semibold text-lg ">
            <p>{`Welcome ${currentUser.displayName}`}</p>
          </div>
          <div className="text-center text-lg text-white font-bold bg-[#436986] rounded">
            <button onClick={() => handleSingUserOut()}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="w-48 text-center text-lg text-white font-bold bg-[#436986] rounded">
          <Link to="/login" className="p-3">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
