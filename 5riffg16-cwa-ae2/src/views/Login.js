import LogInForm from "../components/LogInForm";


function Login() {
  return (
    <div className="mt-36 mx-auto flex flex-col w-[42.5rem] h-[27.5rem] border-2 border-[#304D63] bg-white rounded">
      <div className="text-center text-5xl py-3">
        <h1>Login Now</h1>
      </div>
      <div className="text-center">
        <LogInForm />
      </div>
    </div>
  );
}

export default Login;
