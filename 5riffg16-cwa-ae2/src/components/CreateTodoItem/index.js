import { useContext } from "react";
import { AuthContext } from "../../services/firebase/auth";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  task: yup.string().required("You must enter a task"),
});

function CreateTodoItem(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { currentUser } = useContext(AuthContext);

  function formatTodoToSubmit(data) {
    return { uid: currentUser ? currentUser.uid : "", task: data.task };
  }

  return (
    <div className="mt-1 h-9 text-lg rounded">
      <form
        onSubmit={handleSubmit((data) =>
          props.onSubmit(formatTodoToSubmit(data))
        )}
      >
        <label htmlFor="todoTask" />
        <input
          {...register("task")}
          className="rounded text-center h-9 hover:bg-blue-100"
          size={35}
          placeholder="Task Name"
          type="text"
        />

        <button
          className="text-lg mx-2 px-1 h-9 text-center text-white font-bold bg-green-500 hover:bg-green-400 rounded"
          type="submit"
        >
          Create
        </button>

        <button
          className="text-lg px-1 text-center h-9 text-white font-bold bg-red-500 hover:bg-red-400 rounded"
          onClick={() => props.onCancel()}
        >
          Cancel
        </button>
        <div className="float-left ml-[25%]">
          <p className="text-red-500 font-semibold">{errors.task?.message}</p>
        </div>
      </form>
    </div>
  );
}

export default CreateTodoItem;
