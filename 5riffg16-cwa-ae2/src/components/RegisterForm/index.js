import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../services/firebase/useAuth";

function RegisterForm() {
  const { createEmailUser, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleCreateUser(email, password) {
    const user = await createEmailUser(email, password);
    if (user) {
      navigate("/");
    }
  }
  
  return (
    <div className="mt-6 h-9 text-lg rounded">
      <form
        className="flex flex-col w-96 mx-auto"
        onSubmit={(event) => {
          event.preventDefault();
          handleCreateUser(email, password);
        }}
      >
        <label className="mt-3" htmlFor="email">
          E-mail
        </label>
        <input
          className="rounded text-center h-9 border-2 border-black mt-1"
          name="email"
          size={35}
          placeholder="Type your e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mt-3" htmlFor="password">
          Password
        </label>
        <input
          className="rounded text-center h-9 border-2 border-black mt-1"
          name="password"
          size={35}
          placeholder="Type your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {authError && <p className="text-red-500 font-semibold">{authError}</p>}
        <div className="mt-5">
          <div className="">
            <button
              className="text-lg px-1 h-8 w-44 text-center text-white font-bold bg-blue-400 rounded"
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div className="mt-6 text-xl text-bold">
            <Link to="/login">Registered Already? Login now!</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
