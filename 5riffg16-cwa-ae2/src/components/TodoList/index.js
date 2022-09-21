import { useState, useEffect } from "react";
import useCrud from "../../services/firebase/useCrud";
import { AuthContext } from "../../services/firebase/auth";

import CreateTodoItem from "../CreateTodoItem";

import TodoItem from "../TodoItem";
import { useContext } from "react";

const todoList = [
  {
    id: "1",
    title: "Webdev",
  },
  {
    id: "2",
    title: "Java",
  },
  {
    id: "3",
    title: "UX",
  },
];

function TodoList() {
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [todos, setTodos] = useState([]);
  const { createTask, getObject, getObjectById } = useCrud();
  // const {userr} = useAuth();
  const { currentUser, pending } = useContext(AuthContext);

  useEffect(() => {
    if (!pending && currentUser) {
      getTodos();
    }
  }, [pending]);

  async function getTodos() {
    console.log(currentUser.uid);
    console.log(pending);
    const todos = await getObjectById(currentUser.uid, "tasks");
    console.log(todos);
    setTodos([...todos]);
  }

  function handleCreateTodo(event) {
    createTask(event);
    getTodos();
    // setTodos([...todos, { id: String(todos.length + 1), title: event }]);
    // setIsAddingTodo(false);
  }

  function removeTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function handleCancelTodo() {
    setIsAddingTodo(false);
  }

  return (
    <div className="mt-5 flex flex-col items-center">
      <div className="w-[30rem] text-center ">
        <div className="text-5xl">To do List</div>

        {isAddingTodo ? (
          <CreateTodoItem
            onSubmit={handleCreateTodo}
            onCancel={handleCancelTodo}
          />
        ) : (
          <div className="mt-3 h-8 text-lg text-white font-bold bg-[#99bbd6] rounded">
            <button onClick={() => setIsAddingTodo(true)}>Add new task</button>
          </div>
        )}
      </div>

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            value={todo.task}
            todoId={todo.id}
            onRemove={removeTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
