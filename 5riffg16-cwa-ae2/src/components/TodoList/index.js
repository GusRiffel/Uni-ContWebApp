import { useState, useEffect } from "react";
import useCrud from "../../services/firebase/useCrud";
import { AuthContext } from "../../services/firebase/auth";

import CreateTodoItem from "../CreateTodoItem";

import TodoItem from "../TodoItem";
import { useContext } from "react";

let todoList = [];

function TodoList() {
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const { createTask, getTaskById, deleteTask } = useCrud();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getTodo();
  }, [currentUser]);

  async function getTodo() {
    if (currentUser) {
      try {
        const todo = await getTaskById(currentUser.uid);
        setTodo([...todo]);
      } catch (error) {
        setError("Error listing document: ", error);
      }
    } else {
      setTodo([...todoList]);
    }
  }

  async function handleCreateTodo(event) {
    if (currentUser) {
      try {
        await createTask(event);
        getTodo();
      } catch (error) {
        setError("Error adding document: ", error);
      }
    } else {
      todoList.push({ id: String(todo.length + 1), task: event.task });
      setTodo([...todo, { id: String(todo.length + 1), task: event.task }]);
    }
    setIsAddingTodo(false);
  }

  async function removeTodo(todoId) {
    if (currentUser) {
      try {
        await deleteTask(todoId);
        getTodo();
      } catch (error) {
        setError("Error deleting document: ", error);
      }
    } else {
      todoList = todoList.filter((todo) => todo.id !== todoId);
      setTodo(todo.filter((todo) => todo.id !== todoId));
    }
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

      {todo.map((todo) => {
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
