import { useState, useContext } from "react";
import { AuthContext } from "../../services/firebase/auth";

function CreateTodoItem(props) {
  const [task, setTask] = useState("");
  // const {user} = useAuth();
  const { currentUser } = useContext(AuthContext);

  function formatTodoToSubmit() {
    return { uid: currentUser.uid, task };
  }

  return (
    <div className="mt-1 h-9 text-lg rounded">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onSubmit(formatTodoToSubmit());
        }}
      >
        <label htmlFor="todoTask" />
        <input
          className="rounded text-center h-9"
          size={35}
          placeholder="Task Name"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="text-lg mx-2 px-1 h-9 text-center text-white font-bold bg-green-500 rounded"
          type="submit"
        >
          Create
        </button>

        <button
          className="text-lg px-1 text-center h-9 text-white font-bold bg-red-500 rounded"
          onClick={() => props.onCancel()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreateTodoItem;
