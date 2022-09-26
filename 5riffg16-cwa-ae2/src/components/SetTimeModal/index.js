import { useState } from "react";
import { FcSupport } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  time: yup
    .number()
    .min(0.5, "Time must be minimum of 0.5 minutes")
    .typeError("Time is required and must be number")
    .required("You must enter a time in minutes"),
});

function SetTimeModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [showModal, setShowModal] = useState(false);

  function handleSubmitAndCloseModal(data) {
    if (!errors.time) {
      props.onSubmit(data);
      setShowModal(false);
    }
  }
  return (
    <>
      <FcSupport
        size={30}
        style={{ cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-2 border-[#304D63]rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">
                    Set your time your{" "}
                    {props.isPomodoro ? "Pomodoro " : "break "}
                    time
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={handleSubmit((data) =>
                      handleSubmitAndCloseModal(data)
                    )}
                  >
                    <div className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        Time in Minutes
                      </label>
                      <input
                        {...register("time", { required: true })}
                        className="shadow appearance-none border rounded w-full hover:bg-blue-100 py-2 px-1 text-black"
                        name="time"
                        placeholder="Set your new time"
                      />
                    </div>
                    <p className="text-red-500 font-semibold">
                      {errors.time?.message}
                    </p>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 bg-transparent  hover:bg-red-100 rounded font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          reset();
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="text-white bg-green-700  hover:bg-green-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default SetTimeModal;
