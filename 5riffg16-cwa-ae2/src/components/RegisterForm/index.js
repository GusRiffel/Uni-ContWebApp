import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../../services/firebase/auth";

const schema = yup.object().shape({
  userName: yup
    .string()
    .required("You must enter an User name")
    .max(6, "Maximum of 6 characters"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("You must enter an email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must have minimum 6 characters"),
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [error, setError] = useState("");
  const { createUser, setUserName, signUserOut } = useContext(AuthContext);
  const navigate = useNavigate();
  

  async function handleCreateUser(data) {
    try {
      const { user } = await createUser(data.email, data.password);
      await setUserName(user, data.userName);
      if (user.displayName) {
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }

  return (
    <div className="mt-6 h-9 text-lg rounded">
      <form
        className="flex flex-col w-96 mx-auto"
        onSubmit={handleSubmit((data) => handleCreateUser(data))}
      >
        <label htmlFor="userName">User name (nickname)</label>
        <input
          {...register("userName", { required: true })}
          className="rounded text-center h-9 border-2  hover:bg-blue-100 border-black mt-1"
          name="userName"
          size={35}
          placeholder="Type your user name Max. 6 chars"
          type="userName"
        />
        <p className="text-red-500 font-semibold">{errors.userName?.message}</p>
        <label className="mt-1" htmlFor="email">
          E-mail
        </label>
        <input
          {...register("email", { required: true })}
          className="rounded text-center h-9 border-2  hover:bg-blue-100 border-black mt-1"
          name="email"
          size={35}
          placeholder="Type your e-mail"
          type="email"
        />
        <p className="text-red-500 font-semibold">{errors.email?.message}</p>

        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input
          {...register("password", { required: true })}
          className="rounded text-center h-9 border-2 border-black hover:bg-blue-100 mt-1"
          name="password"
          size={35}
          placeholder="Type your password"
          type="password"
        />
        <p className="text-red-500 font-semibold">{errors.password?.message}</p>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
        <div className="mt-2">
          <div className="">
            <button
              className="text-lg px-1 h-8 w-44 text-center text-white font-bold bg-blue-400 hover:bg-blue-300 rounded"
              type="submit"
            >
              Create Account
            </button>
          </div>
          <div className="mt-2 text-xl font-semibold hover:font-bold">
            <Link to="/login">Registered Already? Login now!</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
