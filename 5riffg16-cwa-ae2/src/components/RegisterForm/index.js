import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AuthContext } from "../../services/firebase/auth";

const schema = yup.object().shape({
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
  const { createUser } = useContext(AuthContext);

  async function handleCreateUser(data) {
    try {
      await createUser(data.email, data.password);
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
        <label className="mt-3" htmlFor="email">
          E-mail
        </label>
        <input
        {...register("email", { required: true })}
          className="rounded text-center h-9 border-2 border-black mt-1"
          name="email"
          size={35}
          placeholder="Type your e-mail"
          type="email"
        />
        <p className="text-red-500 font-semibold">{errors.email?.message}</p>

        <label className="mt-3" htmlFor="password">
          Password
        </label>
        <input
        {...register("password", { required: true })}
          className="rounded text-center h-9 border-2 border-black mt-1"
          name="password"
          size={35}
          placeholder="Type your password"
          type="password"
        />
        <p className="text-red-500 font-semibold">{errors.password?.message}</p>
        {error && <p className="text-red-500 font-semibold">{error}</p>}
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
