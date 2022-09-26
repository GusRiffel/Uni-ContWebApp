import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SocialIcon } from "react-social-icons";
import { Link, useNavigate } from "react-router-dom";

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

function LogInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [error, setError] = useState("");
  const { signIn, signInGoogleUser, signInFacebookUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  async function handleUserLogin(data) {
    try {
      await signIn(data.email, data.password);
      navigate("/")
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }

  async function handleSocialLogin(data) {
    if (data === "google") {
      await signInGoogleUser();
    } else if (data === "facebook") {
      await signInFacebookUser();
    }
  }

  return (
    <div className="mt-1 h-9 text-lg rounded">
      <form
        className="flex flex-col w-96 mx-auto"
        onSubmit={handleSubmit((data) => handleUserLogin(data))}
      >
        <label className="mt-3" htmlFor="email">
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

        <label className="mt-3" htmlFor="password">
          Password
        </label>
        <input
          {...register("password", { required: true, minLength: 6 })}
          className="rounded text-center h-9 border-2  hover:bg-blue-100 border-black mt-1"
          name="password"
          size={35}
          placeholder="Type your password"
          type="password"
        />
        <p className="text-red-500 font-semibold">{errors.password?.message}</p>
        {error && <p className="text-red-500 font-semibold">{error}</p>}

        <div className="mt-3">
          <div className="">
            <button
              className="text-lg px-1 h-8 w-44 text-center text-white font-bold bg-blue-400 hover:bg-blue-300 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-3 flex justify-evenly">
            <div>
              <SocialIcon
                network="google"
                className="hover:bg-blue-100 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => handleSocialLogin("google")}
              />
            </div>
            <div>
              <SocialIcon
                network="facebook"
                className="hover:bg-blue-100 rounded"
                style={{ cursor: "pointer" }}
                onClick={() => handleSocialLogin("facebook")}
              />
            </div>
          </div>
          <div className="mt-2 text-xl font-bold hover:font-semibold">
            <Link to="/register">Don't have an Account? Register now!</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
