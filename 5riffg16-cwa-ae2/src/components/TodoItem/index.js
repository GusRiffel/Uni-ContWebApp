function TodoItem(props) {
  return (
    <div className="mt-3 p-2 flex justify-between font-bold text-[#436986] border-2 border-[#436986]  bg-white w-[30rem] rounded">
      <p className="">{props.value}</p>
      <button className="px-2 bg-red-400 hover:bg-red-500 rounded" onClick={() => props.onRemove(props.todoId)}>X</button>
    </div>
  );
}

export default TodoItem
