import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../services/firebase/auth";

function Header() {
  const { currentUser, signUserOut } = useContext(AuthContext);

  function handleSingUserOut() {
    signUserOut();
  }

  return (
    <>
      <div className="w-full flex justify-around items-center mx-auto py-8 bg-[#304D63]">
        <div className="w-[22rem] text-center text-lg text-white font-bold bg-[#436986] hover:bg-[#5d84a1] rounded">
          <Link to="about" className="p-3">
            <span className="w-full inline-block">What Is Pomodoro?</span>
          </Link>
        </div>

        <div className="w-[22rem] text-center text-lg text-white font-bold bg-[#436986] hover:bg-[#5d84a1]  rounded">
          <Link to="/" className="p-3">
            <span className="w-full inline-block">It's Time to Focus</span>
          </Link>
        </div>

        {currentUser ? (
          <div className="flex w-[22rem] justify-between">
            <div className="text-left text-lg text-white font-bold bg-[#436986] hover:bg-[#5d84a1]  rounded">
              <Link to="/dashboard" className="p-3">
                <span className="w-full inline-block">DashBoard</span>
              </Link>
            </div>
            <div className="text-white font-semibold text-lg ">
              <p>{currentUser.displayName && `Welcome ${currentUser.displayName}`}</p>
            </div>
            <div className="text-center text-lg text-white font-bold bg-[#436986] hover:bg-[#5d84a1]  rounded">
              <button
                className="px-3 w-full inline-block"
                onClick={() => handleSingUserOut()}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="w-[22rem] text-center text-lg text-white font-bold bg-[#436986] hover:bg-[#5d84a1]  rounded">
            <Link to="/login" className="p-3">
              <span className="w-full inline-block">Login</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
