import { Link } from "react-router-dom";
import useAuth from "../../services/firebase/useAuth";

function Header() {
  const { user, signUserOut } = useAuth();

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

      {user ? (
        <div className="flex">
          <div className="text-white font-semibold text-lg ">
            <p>{`Welcome ${user}`}</p>
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
