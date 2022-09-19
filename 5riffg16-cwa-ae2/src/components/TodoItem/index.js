function TodoItem(props) {
  return (
    <div className="flex">
      <p>{props.value}</p>
      <button onClick={() => props.onRemove(props.todoId)}>X</button>
    </div>
  );
}

export default TodoItem
