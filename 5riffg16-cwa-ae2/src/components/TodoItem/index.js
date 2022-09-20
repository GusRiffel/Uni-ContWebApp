function TodoItem(props) {
  return (
    <div className="mt-3 p-2 flex justify-between font-bold bg-red-200 w-[30rem] rounded">
      <p>{props.value}</p>
      <button className="px-2 bg-zinc-300 rounded" onClick={() => props.onRemove(props.todoId)}>X</button>
    </div>
  );
}

export default TodoItem
